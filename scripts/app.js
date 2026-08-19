import { profileData } from "../data/profile.js";
import { metricsData } from "../data/metrics.js";
import { openSourceData } from "../data/openSource.js";
import { projectsData } from "../data/projects.js";
import { principlesData } from "../data/principles.js";
import { experienceData } from "../data/experience.js";
import { skillsData } from "../data/skills.js";
import { githubData } from "../data/github.js";

import { initTheme } from "./theme.js";
import { initCounters } from "./counter.js";
import { copyToClipboard } from "./copy-util.js";

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  renderApp();
  initNavigation();
  initCounters();
  initContactActions();
  await loadPackageAndRepoMetadata();
});

function renderApp() {
  renderHero();
  renderEngineeringImpact();
  renderFeaturedDicom();
  renderProjects();
  renderPrinciples();
  renderExperience();
  renderHealthcareDomain();
  renderSkills();
  renderEducationAndLearning();
  renderContact();
}

function renderHero() {
  const container = document.getElementById("hero-container");
  if (!container) return;

  const primaryOutcomes = metricsData.primary;

  container.innerHTML = `
    <div class="hero-meta-row animate-fade-in">
      <span class="pulse-dot"></span>
      <span>${profileData.role} • ${profileData.location} • ${profileData.experienceYears}</span>
    </div>

    <h1 class="hero-title">${profileData.name}</h1>
    <div class="hero-tagline">${profileData.tagline}</div>
    <p class="hero-bio">${profileData.summary}</p>

    <div class="hero-actions-row">
      <a href="#projects" class="btn btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        View My Work
      </a>
      <a href="mailto:${profileData.contact.email}?subject=Software%20Engineer%20Role%20Inquiry" class="btn btn-secondary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        Let's Talk
      </a>
      <a href="${profileData.contact.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        GitHub ↗
      </a>
      <a href="${profileData.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        LinkedIn ↗
      </a>
      <a href="assets/AdhilKrishnaG.pdf" download="AdhilKrishnaG.pdf" target="_blank" class="btn btn-outline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Download Resume
      </a>
    </div>

    <div class="hero-outcomes-wrap">
      <div class="hero-outcomes-title">Primary Measured Outcomes (Production Benchmarks)</div>
      <div class="hero-outcomes-grid">
        ${primaryOutcomes.map(m => `
          <div class="primary-outcome-box">
            <div class="outcome-tag">${m.category}</div>
            <div class="outcome-figures">
              <span class="outcome-before">${m.before}</span>
              <span class="outcome-arrow">→</span>
              <span class="outcome-after" data-counter-target="${m.after}">${m.after}</span>
            </div>
            <div class="outcome-label">${m.metricLabel}</div>
            <p class="outcome-desc">${m.description}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderEngineeringImpact() {
  const container = document.getElementById("secondary-metrics-container");
  if (!container) return;

  const supporting = metricsData.supporting;

  container.innerHTML = supporting.map(m => `
    <div class="impact-cell">
      <div class="impact-cell-val" data-counter-target="${m.value}">${m.value}</div>
      <div class="impact-cell-label">${m.label}</div>
      <p class="impact-cell-context">${m.context}</p>
    </div>
  `).join("");
}

function renderFeaturedDicom() {
  const container = document.getElementById("dicom-feature-container");
  if (!container) return;

  const pkg = openSourceData.package;
  const stages = openSourceData.pipelineStages;
  const caps = openSourceData.technicalCapabilities;

  container.innerHTML = `
    <div class="dicom-flagship-panel">
      <div class="dicom-header-strip">
        <div class="dicom-title-row">
          <span class="dicom-package-name">${pkg.name}</span>
          <span class="dicom-meta-pill" id="dicom-version-pill">${pkg.version}</span>
          <span class="dicom-meta-pill">${pkg.license} License</span>
          <span class="dicom-meta-pill">Dart</span>
        </div>
        <div class="flex gap-2 wrap">
          <a href="${pkg.pubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            pub.dev Package ↗
          </a>
          <a href="${pkg.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub Repository ↗
          </a>
        </div>
      </div>

      <p class="dicom-tagline">${pkg.tagline}</p>
      <p class="dicom-motivation-text">${pkg.coreMotivation}</p>

      <!-- Linear Technical Pipeline Diagram -->
      <div class="pipeline-strip">
        <div class="pipeline-strip-title">Technical Processing Pipeline (PS3.10 & PS3.5 Standards)</div>
        <div class="pipeline-flow">
          ${stages.map(st => `
            <div class="pipeline-step-box">
              <span class="step-num">${st.step}</span>
              <div class="step-title">${st.name}</div>
              <p class="step-detail">${st.detail}</p>
              <span class="step-impl">${st.impl}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Verified Capabilities Grid -->
      <div style="margin-bottom:1.5rem;">
        <div class="subhead">Core Package Capabilities</div>
        <div class="grid grid-cols-2 gap-3">
          ${caps.map(c => `
            <div style="background:var(--bg-surface); border:1px solid var(--border-dim); border-radius:var(--radius-sm); padding:1rem 1.15rem;">
              <div style="font-weight:600; font-size:0.925rem; color:var(--text-main); margin-bottom:0.25rem;">${c.title}</div>
              <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5;">${c.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Public Repository Metadata Note -->
      <div class="github-repo-meta">
        <div id="github-meta-label">Repository metadata · Updated from GitHub</div>
        <div class="flex gap-4 wrap" id="github-stats-container">
          <span>Version: <strong>${pkg.version}</strong></span>
          <span>License: <strong>${pkg.license}</strong></span>
        </div>
      </div>
    </div>
  `;
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projectsData.map(p => `
    <div class="case-study-entry">
      <div class="case-study-top">
        <h3 class="case-study-name">${p.title}</h3>
        <span class="case-study-badge">${p.type}</span>
      </div>
      <p class="case-study-lead">${p.summary}</p>

      <div class="case-study-layout">
        <div>
          <div class="subhead">Scope & Context</div>
          <p class="case-study-problem">${p.contextAndScope}</p>
        </div>

        <div>
          <div class="subhead">${p.id === 'hms' ? 'Engineering Work' : 'Key Work'}</div>
          <div class="decisions-list">
            ${(p.engineeringWork || p.keyWork || []).map(d => `
              <div class="decision-item">
                <div class="decision-area">${d.area}</div>
                <div class="decision-detail">${d.detail}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="stack-pill-row">
        ${p.stack.map(s => `<span class="stack-pill">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderPrinciples() {
  const container = document.getElementById("principles-container");
  if (!container) return;

  const principles = principlesData.principles;
  const lifecycle = principlesData.lifecycle;

  container.innerHTML = `
    <div class="principles-list">
      ${principles.map(pr => `
        <div class="principle-entry">
          <div class="principle-num">${pr.number}</div>
          <h4 class="principle-name">${pr.title}</h4>
          <div class="principle-summary">${pr.summary}</div>
          <p class="principle-desc">${pr.description}</p>
        </div>
      `).join("")}
    </div>

    <div class="lifecycle-bar">
      <div class="subhead" style="margin-bottom:0.65rem;">From Feature to Production</div>
      <div class="lifecycle-steps-row">
        ${lifecycle.map((s, idx) => `
          <span class="lifecycle-step-tag">${s.name}</span>
          ${idx < lifecycle.length - 1 ? `<span class="lifecycle-arrow">→</span>` : ''}
        `).join("")}
      </div>
      <p class="lifecycle-note">${principlesData.lifecycleCopy}</p>
    </div>
  `;
}

function renderExperience() {
  const container = document.getElementById("experience-timeline-container");
  if (!container) return;

  container.innerHTML = `
    <div class="experience-block">
      ${experienceData.map(exp => `
        <div class="job-entry">
          <div class="job-meta-left">
            <div class="job-period">${exp.period}</div>
            <div class="job-company">${exp.company}</div>
            <div class="job-location">${exp.location}</div>
          </div>
          <div class="job-details-right">
            <h3 class="job-title">${exp.role}</h3>
            <p class="job-summary-text">${exp.summary}</p>
            <ul class="job-bullets">
              ${exp.highlights.map(h => `<li>${h}</li>`).join("")}
            </ul>
            <div class="stack-pill-row" style="border:none; padding-top:0.5rem;">
              ${exp.skills.map(s => `<span class="stack-pill">${s}</span>`).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="career-progression-bar">
      <div class="subhead" style="margin-bottom:0.65rem;">Career Progression</div>
      <div class="career-flow-row">
        ${profileData.careerArc.map((c, idx) => `
          <span class="career-node">${c.stage}</span>
          ${idx < profileData.careerArc.length - 1 ? `<span style="color:var(--accent); font-weight:700;">→</span>` : ''}
        `).join("")}
      </div>
    </div>
  `;
}

function renderHealthcareDomain() {
  const container = document.getElementById("healthcare-domain-container");
  if (!container) return;

  const features = [
    { title: "Hospital Management Workflows", desc: "Patient records, appointments, billing, and clinical reporting built with Clean Architecture and MVVM." },
    { title: "Medical Documents & DICOM", desc: "Document upload, PDF processing, and medical image (DICOM) viewing modules." },
    { title: "Clinical Policy & Compliance", desc: "REST API-driven clinical policy applications with healthcare compliance requirements and secure data handling." },
    { title: "Production Support", desc: "SQL/SSMS troubleshooting, root-cause analysis, and 99% observed system availability during the Support Engineer period." }
  ];

  container.innerHTML = features.map(f => `
    <div class="clean-panel">
      <h4 style="margin-bottom:0.4rem; color:var(--text-main);">${f.title}</h4>
      <p style="font-size:0.875rem; color:var(--text-muted); line-height:1.55;">${f.desc}</p>
    </div>
  `).join("");
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skillsData.map(grp => `
    <div class="skill-category-block">
      <div class="skill-category-label">${grp.category}</div>
      <div class="skill-names-list">
        ${grp.skills.map(s => `<span class="skill-name-item">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderEducationAndLearning() {
  const container = document.getElementById("education-container");
  if (!container) return;

  const edu = profileData.education;
  const tr = profileData.training;
  const exp = profileData.currentlyExploring;

  container.innerHTML = `
    <div class="clean-panel">
      <div class="panel-header-mono">${edu.period} • Education</div>
      <h3 class="panel-title">${edu.degree}</h3>
      <div class="panel-meta">${edu.institution}, ${edu.location}</div>
      <p class="panel-text">${edu.notes}</p>
    </div>

    <div class="clean-panel">
      <div class="panel-header-mono">2022 • Professional Training</div>
      <h3 class="panel-title">${tr.title}</h3>
      <p class="panel-text">${tr.description}</p>
    </div>

    <div class="clean-panel" style="border-left: 3px solid var(--accent);">
      <div class="panel-header-mono">${exp.badge}</div>
      <h3 class="panel-title">${exp.title}</h3>
      <p class="panel-text" style="margin-bottom:0.5rem;">${exp.description}</p>
      <div style="font-size:0.75rem; color:var(--accent); font-weight:500;">${exp.statusNote}</div>
    </div>
  `;
}

function renderContact() {
  const container = document.getElementById("contact-container");
  if (!container) return;

  const c = profileData.contact;

  container.innerHTML = `
    <div class="contact-panel">
      <div class="contact-headline-row">
        <div>
          <span class="section-tag">Direct Communication</span>
          <h2>Get in Touch</h2>
        </div>
        <p style="margin:0; font-size:0.95rem; color:var(--text-muted); max-width:480px;">
          Open to Software Engineer and Flutter Engineer opportunities where I can contribute to challenging production software.
        </p>
      </div>

      <div class="contact-grid">
        <div class="contact-tile">
          <a href="mailto:${c.email}" style="color:inherit; text-decoration:none; display:flex; align-items:center; gap:0.4rem;" title="Send email to ${c.email}">
            <span>${c.email}</span>
            <span style="color:var(--accent); font-size:0.75rem;">↗</span>
          </a>
          <button class="copy-btn" id="copy-email-btn" title="Copy Email" style="background:none; border:none; color:var(--accent); cursor:pointer; font-size:0.75rem; font-weight:600; padding:0.2rem 0.4rem;">Copy</button>
        </div>
        <div class="contact-tile">
          <a href="tel:${c.phone}" style="color:inherit; text-decoration:none; display:flex; align-items:center; gap:0.4rem;" title="Call ${c.phoneDisplay}">
            <span>${c.phoneDisplay}</span>
            <span style="color:var(--accent); font-size:0.75rem;">↗</span>
          </a>
          <button class="copy-btn" id="copy-phone-btn" title="Copy Phone Number" style="background:none; border:none; color:var(--accent); cursor:pointer; font-size:0.75rem; font-weight:600; padding:0.2rem 0.4rem;">Copy</button>
        </div>
        <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-tile">
          <span>${c.linkedinUsername}</span>
          <span style="color:var(--accent);">↗</span>
        </a>
        <a href="${c.github}" target="_blank" rel="noopener noreferrer" class="contact-tile">
          <span>${c.githubUsername}</span>
          <span style="color:var(--accent);">↗</span>
        </a>
      </div>
    </div>
  `;
}

function initNavigation() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const drawerLinks = document.querySelectorAll(".mobile-drawer .nav-link");

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      drawer.classList.toggle("open");
    });

    drawerLinks.forEach(link => {
      link.addEventListener("click", () => {
        drawer.classList.remove("open");
      });
    });
  }

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}

function initContactActions() {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#copy-email-btn")) {
      e.preventDefault();
      copyToClipboard(profileData.contact.email, "Email copied to clipboard!");
    } else if (e.target.closest("#copy-phone-btn")) {
      e.preventDefault();
      copyToClipboard(profileData.contact.phone, "Phone number copied to clipboard!");
    }
  });
}

async function loadPackageAndRepoMetadata() {
  const statsContainer = document.getElementById("github-stats-container");
  const versionPill = document.getElementById("dicom-version-pill");
  const metaLabel = document.getElementById("github-meta-label");
  if (!statsContainer) return;

  const data = await githubData.getRepoMetadata();

  if (versionPill && data.version) {
    versionPill.textContent = data.version;
  }
  if (metaLabel && data.label) {
    metaLabel.textContent = data.label;
  }

  const items = [];
  if (data.version) items.push(`<span>Version: <strong>${data.version}</strong></span>`);
  if (data.license) items.push(`<span>License: <strong>${data.license}</strong></span>`);
  if (typeof data.stars === "number") {
    items.push(`<span>Stars: <strong>${data.stars}</strong></span>`);
  }
  if (typeof data.forks === "number") {
    items.push(`<span>Forks: <strong>${data.forks}</strong></span>`);
  }

  statsContainer.innerHTML = items.join("");
}
