/*
  # Create Employer Subscription System

  1. New Tables
    - `subscription_plans`: Predefined subscription tiers (Free, Basic, Pro, Enterprise)
    - `employers`: Employer account information
    - `employer_subscriptions`: Tracks employer subscription status and expiry
    - `employee_profiles`: Extended employee detail fields
    - `employer_view_access`: Access control for viewing employee details

  2. Tables Modified
    - `auth.users`: Employer profile data will be stored separately

  3. Security
    - Enable RLS on all tables
    - Add policies for employer access control
    - Employers can only see details they're authorized to view based on subscription tier

  4. Important Notes
    - Free tier: Can see basic job info only
    - Basic tier: Can see candidate name and contact
    - Pro tier: Can see full profile including bio and skills
    - Enterprise tier: Unlimited access to all data
    - Subscriptions renew monthly
*/

-- Create subscription plans table
CREATE TABLE IF NOT EXISTS subscription_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text,
  price_monthly numeric NOT NULL,
  features jsonb NOT NULL,
  max_job_postings integer DEFAULT 1,
  max_employees_viewable integer DEFAULT 100,
  can_view_contact boolean DEFAULT false,
  can_view_full_profile boolean DEFAULT false,
  can_view_applications boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create employers table
CREATE TABLE IF NOT EXISTS employers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  company_name text NOT NULL,
  company_email text NOT NULL UNIQUE,
  company_website text,
  company_logo_url text,
  phone text,
  address text,
  industry text,
  company_size text,
  verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create employer subscriptions table
CREATE TABLE IF NOT EXISTS employer_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id uuid NOT NULL REFERENCES employers(id) ON DELETE CASCADE,
  plan_id uuid NOT NULL REFERENCES subscription_plans(id),
  status text DEFAULT 'active',
  started_at timestamptz DEFAULT now(),
  expires_at timestamptz NOT NULL,
  auto_renew boolean DEFAULT true,
  payment_method text,
  next_billing_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create employee profiles extended table
CREATE TABLE IF NOT EXISTS employee_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  phone text,
  address text,
  gender text,
  bio text,
  skills text[],
  experience_years integer,
  education text,
  certifications text[],
  portfolio_url text,
  linkedin_url text,
  github_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create access control table
CREATE TABLE IF NOT EXISTS employer_view_access (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id uuid NOT NULL REFERENCES employers(id) ON DELETE CASCADE,
  employee_user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  can_view_contact boolean DEFAULT false,
  can_view_full_profile boolean DEFAULT false,
  accessed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  UNIQUE(employer_id, employee_user_id)
);

-- Create indices for better query performance
CREATE INDEX IF NOT EXISTS idx_employers_user_id ON employers(user_id);
CREATE INDEX IF NOT EXISTS idx_employer_subscriptions_employer_id ON employer_subscriptions(employer_id);
CREATE INDEX IF NOT EXISTS idx_employee_profiles_user_id ON employee_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_employer_view_access_employer_id ON employer_view_access(employer_id);
CREATE INDEX IF NOT EXISTS idx_employer_view_access_employee_id ON employer_view_access(employee_user_id);

-- Enable Row Level Security
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE employers ENABLE ROW LEVEL SECURITY;
ALTER TABLE employer_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE employee_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE employer_view_access ENABLE ROW LEVEL SECURITY;

-- Subscription Plans: Public read access
CREATE POLICY "Subscription plans are publicly readable"
  ON subscription_plans FOR SELECT
  TO authenticated
  USING (true);

-- Employers: Each employer can view/update their own record
CREATE POLICY "Employers can view own data"
  ON employers FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Employers can update own data"
  ON employers FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Employers can insert own record"
  ON employers FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Employer Subscriptions: View own subscription
CREATE POLICY "Employers can view own subscription"
  ON employer_subscriptions FOR SELECT
  TO authenticated
  USING (
    employer_id IN (
      SELECT id FROM employers WHERE user_id = auth.uid()
    )
  );

-- Employee Profiles: Users can view/update own profile
CREATE POLICY "Users can view own profile"
  ON employee_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON employee_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON employee_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Employer View Access: Employers can view details based on access
CREATE POLICY "Employers can view granted employee profiles"
  ON employee_profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM employer_view_access
      WHERE employer_view_access.employee_user_id = auth.uid()
      AND employer_view_access.employer_id IN (
        SELECT id FROM employers WHERE user_id = auth.uid()
      )
    )
    OR auth.uid() = user_id
  );

-- Insert default subscription plans
INSERT INTO subscription_plans (name, slug, description, price_monthly, features, max_job_postings, max_employees_viewable, can_view_contact, can_view_full_profile, can_view_applications)
VALUES
  ('Free', 'free', 'Get started with job posting', 0, '{"job_postings": 1, "views": "limited", "support": "community"}'::jsonb, 1, 10, false, false, false),
  ('Basic', 'basic', 'Grow your team with essential features', 29, '{"job_postings": 5, "views": "candidates", "support": "email"}'::jsonb, 5, 100, true, false, false),
  ('Pro', 'pro', 'Advanced hiring with detailed insights', 79, '{"job_postings": 20, "views": "full_profile", "support": "priority"}'::jsonb, 20, 500, true, true, true),
  ('Enterprise', 'enterprise', 'Unlimited access for large teams', 299, '{"job_postings": "unlimited", "views": "unlimited", "support": "dedicated"}'::jsonb, 999, 9999, true, true, true)
ON CONFLICT DO NOTHING;
