const employerState = {
  user: null,
  employer: null,
  subscription: null,
  subscriptionPlans: [],
};

function switchToEmployer() {
  const jobBoardHome = document.getElementById('jobBoardHome');
  const employerPortal = document.getElementById('employerPortal');
  const mainApp = document.getElementById('mainApp');

  jobBoardHome.classList.remove('center');
  jobBoardHome.classList.add('to-left');
  jobBoardHome.classList.remove('active');

  employerPortal.classList.remove('to-right');
  employerPortal.classList.add('center');
  employerPortal.classList.add('active');

  mainApp.classList.add('to-right');
  mainApp.classList.remove('center');
  mainApp.classList.remove('active');

  document.body.classList.add('mainApp-active');
  loadSubscriptionPlans();
}

function backToJobSeeker() {
  const jobBoardHome = document.getElementById('jobBoardHome');
  const employerPortal = document.getElementById('employerPortal');
  const mainApp = document.getElementById('mainApp');

  employerPortal.classList.remove('center');
  employerPortal.classList.add('to-right');
  employerPortal.classList.remove('active');

  jobBoardHome.classList.remove('to-left');
  jobBoardHome.classList.add('center');
  jobBoardHome.classList.add('active');

  mainApp.classList.remove('to-right');
  mainApp.classList.remove('center');
  mainApp.classList.remove('active');

  document.body.classList.remove('mainApp-active');
}

async function loadSubscriptionPlans() {
  const plans = [
    {
      id: 'plan-free',
      name: 'Free',
      slug: 'free',
      price: 0,
      description: 'Get started with job posting',
      features: ['1 Job Posting', 'Basic job listings', 'View limited candidate profiles'],
      maxJobs: 1,
      canViewContact: false,
      canViewFullProfile: false,
    },
    {
      id: 'plan-basic',
      name: 'Basic',
      slug: 'basic',
      price: 29,
      description: 'Grow your team with essential features',
      features: ['5 Job Postings', 'View up to 100 candidates', 'See candidate name and contact', 'Email support'],
      maxJobs: 5,
      canViewContact: true,
      canViewFullProfile: false,
    },
    {
      id: 'plan-pro',
      name: 'Pro',
      slug: 'pro',
      price: 79,
      description: 'Advanced hiring with detailed insights',
      features: ['20 Job Postings', 'View up to 500 candidates', 'See full profiles and contact info', 'Priority email support'],
      maxJobs: 20,
      canViewContact: true,
      canViewFullProfile: true,
    },
    {
      id: 'plan-enterprise',
      name: 'Enterprise',
      slug: 'enterprise',
      price: 299,
      description: 'Unlimited access for large teams',
      features: ['Unlimited Job Postings', 'Unlimited candidate access', 'All candidate details', 'Dedicated support'],
      maxJobs: 999,
      canViewContact: true,
      canViewFullProfile: true,
    },
  ];

  employerState.subscriptionPlans = plans;
  renderPricingPlans(plans);
}

function renderPricingPlans(plans) {
  const grid = document.getElementById('pricingGrid');
  grid.innerHTML = '';

  plans.forEach(plan => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.cssText = `
      display: flex;
      flex-direction: column;
      padding: 24px;
      border: ${plan.slug === 'pro' ? '2px solid var(--accent)' : '1px solid var(--border)'};
      position: relative;
    `;

    if (plan.slug === 'pro') {
      const badge = document.createElement('div');
      badge.textContent = 'Most Popular';
      badge.style.cssText = `
        position: absolute;
        top: -12px;
        right: 24px;
        background: var(--accent);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.85em;
        font-weight: 600;
      `;
      card.appendChild(badge);
    }

    card.innerHTML += `
      <h3 style="margin:0 0 8px 0;">${plan.name}</h3>
      <p class="muted" style="margin:0 0 16px 0;font-size:0.95em;">${plan.description}</p>
      <div style="margin:16px 0;font-size:2.5em;font-weight:bold;color:var(--accent);">
        $${plan.price}<span style="font-size:0.5em;color:var(--muted);">/month</span>
      </div>
      <div style="margin:20px 0;flex:1;">
        ${plan.features.map(f => `<div style="margin:8px 0;font-size:0.95em;">✓ ${f}</div>`).join('')}
      </div>
      <button class="btn ${plan.slug === 'pro' ? 'primary' : ''}" data-plan="${plan.slug}" style="width:100%;">
        ${plan.price === 0 ? 'Start Free' : 'Subscribe Now'}
      </button>
    `;

    card.querySelector('button').addEventListener('click', () => {
      if (!state.user) {
        openModal();
      } else {
        selectPlan(plan);
      }
    });

    grid.appendChild(card);
  });
}

function selectPlan(plan) {
  alert(`Selected ${plan.name} plan ($${plan.price}/month). In a real app, this would process payment.`);
  switchToEmployerTab('my-subscription');

  employerState.subscription = {
    plan: plan,
    status: 'active',
    startDate: new Date(),
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  };
  renderSubscriptionDetails();
}

function renderSubscriptionDetails() {
  const container = document.getElementById('subscriptionDetails');

  if (!employerState.subscription) {
    container.innerHTML = '<div class="muted">No active subscription. Choose a plan to get started.</div>';
    return;
  }

  const plan = employerState.subscription.plan;
  container.innerHTML = `
    <div style="margin-bottom:20px;">
      <h3>Current Plan: ${plan.name}</h3>
      <p class="muted">${plan.description}</p>
    </div>
    <hr />
    <div style="margin:20px 0;">
      <div style="display:flex;justify-content:space-between;margin:8px 0;">
        <span>Price:</span>
        <span style="font-weight:600;">$${plan.price}/month</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin:8px 0;">
        <span>Status:</span>
        <span style="font-weight:600;color:var(--accent);">Active</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin:8px 0;">
        <span>Renewal Date:</span>
        <span style="font-weight:600;">${employerState.subscription.expiryDate.toLocaleDateString()}</span>
      </div>
    </div>
    <hr />
    <div style="margin:20px 0;">
      <h4>Plan Features:</h4>
      <ul style="margin:12px 0;padding-left:20px;">
        ${plan.features.map(f => `<li style="margin:6px 0;">${f}</li>`).join('')}
      </ul>
    </div>
    <div style="margin-top:24px;display:flex;gap:12px;">
      <button class="btn primary" style="flex:1;">Upgrade Plan</button>
      <button class="btn" style="flex:1;">Manage Billing</button>
    </div>
  `;
}

function switchToEmployerTab(tab) {
  document.querySelectorAll('#employerPortal .sidebar nav li').forEach(li => {
    li.classList.toggle('active', li.dataset.tab === tab);
  });
  document.querySelectorAll('#employerPortal .tab-pane').forEach(p => p.classList.remove('active'));
  const pane = document.getElementById('tab-' + tab);
  if (pane) pane.classList.add('active');
}

function loadAndDisplayCandidates() {
  const candidatesList = document.getElementById('candidatesList');
  candidatesList.innerHTML = '';

  const sampleCandidates = [
    {
      id: 'c1',
      name: 'John Doe',
      jobTitle: 'Software Engineer',
      email: 'john@example.com',
      phone: '555-0101',
      bio: 'Experienced full-stack developer with 5 years experience.',
      skills: ['JavaScript', 'React', 'Node.js'],
      experience: 5,
    },
    {
      id: 'c2',
      name: 'Jane Smith',
      jobTitle: 'Product Manager',
      email: 'jane@example.com',
      phone: '555-0102',
      bio: 'Product-focused PM with strong technical background.',
      skills: ['Product Strategy', 'Data Analysis', 'Leadership'],
      experience: 7,
    },
    {
      id: 'c3',
      name: 'Bob Johnson',
      jobTitle: 'DevOps Engineer',
      email: 'bob@example.com',
      phone: '555-0103',
      bio: 'Cloud infrastructure specialist.',
      skills: ['AWS', 'Kubernetes', 'Docker'],
      experience: 4,
    },
  ];

  const currentPlan = employerState.subscription?.plan || null;

  sampleCandidates.forEach(candidate => {
    const html = accessControl.getEmployeeCardHTML(candidate, currentPlan);
    const div = document.createElement('div');
    div.innerHTML = html;
    candidatesList.appendChild(div.firstChild);
  });

  if (sampleCandidates.length === 0) {
    candidatesList.innerHTML = '<div class="muted">No candidates available yet.</div>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const switchBtn = document.getElementById('switchToEmployer');
  const backBtn = document.getElementById('backToJobSeeker');

  if (switchBtn) {
    switchBtn.addEventListener('click', switchToEmployer);
  }

  if (backBtn) {
    backBtn.addEventListener('click', backToJobSeeker);
  }

  const employerSidebar = document.querySelectorAll('#employerPortal .sidebar nav li');
  employerSidebar.forEach(li => {
    li.addEventListener('click', () => {
      const tab = li.dataset.tab;
      if (tab) {
        switchToEmployerTab(tab);
        if (tab === 'candidates') {
          loadAndDisplayCandidates();
        }
      }
    });
  });

  const postJobForm = document.getElementById('postJobForm');
  if (postJobForm) {
    postJobForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Job posting submitted! In a real app, this would be saved to the database.');
      postJobForm.reset();
    });
  }

  const employerProfileForm = document.getElementById('employerProfileForm');
  if (employerProfileForm) {
    employerProfileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Company profile updated!');
    });
  }

  const candidateSearch = document.getElementById('candidateSearch');
  if (candidateSearch) {
    candidateSearch.addEventListener('input', () => {
      loadAndDisplayCandidates();
    });
  }
});
