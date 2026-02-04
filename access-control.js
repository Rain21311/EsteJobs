class AccessControl {
  constructor() {
    this.subscriptionTiers = {
      free: {
        canViewContact: false,
        canViewFullProfile: false,
        canViewApplications: false,
        maxCandidatesViewable: 10,
      },
      basic: {
        canViewContact: true,
        canViewFullProfile: false,
        canViewApplications: false,
        maxCandidatesViewable: 100,
      },
      pro: {
        canViewContact: true,
        canViewFullProfile: true,
        canViewApplications: true,
        maxCandidatesViewable: 500,
      },
      enterprise: {
        canViewContact: true,
        canViewFullProfile: true,
        canViewApplications: true,
        maxCandidatesViewable: 9999,
      },
    };
  }

  getAccessLevel(subscriptionPlan) {
    if (!subscriptionPlan) return this.subscriptionTiers.free;
    return this.subscriptionTiers[subscriptionPlan.slug] || this.subscriptionTiers.free;
  }

  canViewContactInfo(subscriptionPlan) {
    const access = this.getAccessLevel(subscriptionPlan);
    return access.canViewContact;
  }

  canViewFullProfile(subscriptionPlan) {
    const access = this.getAccessLevel(subscriptionPlan);
    return access.canViewFullProfile;
  }

  canViewApplications(subscriptionPlan) {
    const access = this.getAccessLevel(subscriptionPlan);
    return access.canViewApplications;
  }

  getMaxCandidatesViewable(subscriptionPlan) {
    const access = this.getAccessLevel(subscriptionPlan);
    return access.maxCandidatesViewable;
  }

  maskEmployeeData(employee, subscriptionPlan) {
    const access = this.getAccessLevel(subscriptionPlan);
    const maskedData = { ...employee };

    if (!access.canViewContact) {
      maskedData.email = '****@****';
      maskedData.phone = '***-***-****';
    }

    if (!access.canViewFullProfile) {
      maskedData.bio = null;
      maskedData.experience = null;
      maskedData.education = null;
      maskedData.skills = null;
      maskedData.portfolio = null;
      maskedData.linkedin = null;
      maskedData.github = null;
    }

    if (!access.canViewApplications) {
      maskedData.applications = null;
    }

    return maskedData;
  }

  getEmployeeCardHTML(employee, subscriptionPlan) {
    const access = this.getAccessLevel(subscriptionPlan);
    const maskedEmployee = this.maskEmployeeData(employee, subscriptionPlan);

    let html = `
      <div class="card" style="padding:16px;display:flex;flex-direction:column;gap:12px;">
        <div>
          <h3 style="margin:0 0 4px 0;">${maskedEmployee.name || 'Anonymous'}</h3>
          <div class="muted" style="font-size:0.95em;">Job Title: ${maskedEmployee.jobTitle || 'Not specified'}</div>
        </div>
    `;

    if (access.canViewContact) {
      html += `
        <div style="background:var(--glass);padding:12px;border-radius:8px;">
          <div><b>Email:</b> ${maskedEmployee.email || '-'}</div>
          <div><b>Phone:</b> ${maskedEmployee.phone || '-'}</div>
        </div>
      `;
    }

    if (access.canViewFullProfile) {
      html += `
        <div>
          <div><b>Bio:</b> ${maskedEmployee.bio || 'No bio provided'}</div>
          ${maskedEmployee.skills ? `<div><b>Skills:</b> ${maskedEmployee.skills.join(', ')}</div>` : ''}
          ${maskedEmployee.experience ? `<div><b>Experience:</b> ${maskedEmployee.experience} years</div>` : ''}
        </div>
      `;
    } else {
      html += `
        <div class="muted" style="font-size:0.9em;padding:12px;background:var(--glass);border-radius:8px;text-align:center;">
          Upgrade to ${access.canViewContact ? 'Pro' : 'Basic'} plan to view full profile
        </div>
      `;
    }

    html += `
      <div style="display:flex;gap:8px;margin-top:8px;">
        <button class="btn primary" style="flex:1;">View Profile</button>
        <button class="btn" style="flex:1;">Save</button>
      </div>
    </div>
    `;

    return html;
  }

  requiresPlanUpgrade(subscriptionPlan, requiredFeature) {
    const access = this.getAccessLevel(subscriptionPlan);

    const featureMap = {
      'view_contact': access.canViewContact,
      'view_full_profile': access.canViewFullProfile,
      'view_applications': access.canViewApplications,
    };

    return !featureMap[requiredFeature];
  }

  getUpgradeMessage(subscriptionPlan, requiredFeature) {
    const currentPlan = subscriptionPlan?.name || 'Free';
    const featureMap = {
      'view_contact': 'contact information',
      'view_full_profile': 'full profile details',
      'view_applications': 'application history',
    };

    const feature = featureMap[requiredFeature] || 'this feature';
    return `Upgrade from ${currentPlan} plan to view ${feature}`;
  }
}

const accessControl = new AccessControl();
