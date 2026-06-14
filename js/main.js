/* Portfolio — Ibrahem Al Hussien */

const PROJECTS = [
  {
    id: 'ayn-alfahad',
    name: 'Ayn Al Fahad',
    type: 'E-Commerce Platform',
    description: 'Cross-platform e-commerce app for browsing products, managing carts, and completing purchases with push notifications.',
    tech: ['Flutter', 'REST APIs', 'Dio', 'Firebase', 'Payments'],
    images: 16,
    playStore: 'https://play.google.com/store/apps/details?id=com.aynalfahad.app',
    appStore: 'https://apps.apple.com/us/app/ayn-al-fahad/id6759203640',
    color: '#54c5f8'
  },
  {
    id: 'kidzi',
    name: 'Kidzi',
    type: 'Healthy Meal Delivery for Children',
    description: 'Mobile platform for ordering and delivering healthy, child-focused meals to families with delivery tracking.',
    tech: ['Flutter', 'REST APIs', 'FCM', 'Firebase', 'Dio'],
    images: 15,
    playStore: 'https://play.google.com/store/apps/details?id=com.kidzi.app',
    appStore: 'https://apps.apple.com/kw/app/kidzi/id6761184802',
    color: '#f59e0b'
  },
  {
    id: 'your-coach',
    name: 'Your Coach',
    type: 'Nutrition & Meal Planning',
    description: 'Nutrition and meal-planning app helping users plan healthy meals with personalized plans and subscription management.',
    tech: ['Flutter', 'REST APIs', 'Firebase', 'Dio', 'Subscriptions'],
    images: 11,
    playStore: 'https://play.google.com/store/apps/details?id=com.yourcoach.app.kw',
    appStore: 'https://apps.apple.com/us/app/your-coach/id6760733978',
    color: '#22c55e'
  },
  {
    id: 'alayntech',
    name: 'AlaynTech',
    type: 'Advanced E-Commerce Platform',
    description: 'Feature-rich e-commerce app with advanced shopping, Stripe/MyFatoorah payment integration, and order tracking.',
    tech: ['Flutter', 'Stripe', 'MyFatoorah', 'Firebase', 'Clean Architecture'],
    images: 7,
    playStore: 'https://play.google.com/store/apps/details?id=com.alayntech.app',
    appStore: 'https://apps.apple.com/us/app/alayntech/id6761734641',
    color: '#8b5cf6'
  },
  {
    id: 'fitness-kitchen',
    name: 'Fitness Kitchen',
    type: 'Fitness & Nutrition Platform',
    description: 'Fitness and nutrition app offering meal options tailored to health and fitness goals with subscription ordering.',
    tech: ['Flutter', 'REST APIs', 'FCM', 'Firebase', 'Dio'],
    images: 8,
    playStore: 'https://play.google.com/store/apps/details?id=com.fitnesskitchen.app',
    appStore: 'https://apps.apple.com/us/app/fitness-kitchen-app/id6759403003',
    color: '#ef4444'
  },
  {
    id: 'afaq-alyan',
    name: 'Afaq Alayn',
    type: 'E-Commerce Platform',
    description: 'Cross-platform e-commerce application for browsing and purchasing products with cart, checkout, and notifications.',
    tech: ['Flutter', 'REST APIs', 'Firebase', 'Dio', 'State Management'],
    images: 0,
    playStore: 'https://play.google.com/store/apps/details?id=com.afaqalyan.app',
    appStore: 'https://apps.apple.com/us/app/afaqalayn/id6760981344',
    color: '#06b6d4'
  }
];

let currentProject = null;
let currentImageIndex = 0;

function getImagePath(projectId, index) {
  const num = String(index).padStart(2, '0');
  return `assets/projects/${projectId}/${num}.jpg`;
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(project => {
    const hasImages = project.images > 0;
    const preview = hasImages
      ? `<div class="project-preview" data-project="${project.id}">
           <img src="${getImagePath(project.id, 1)}" alt="${project.name} screenshot" loading="lazy" />
           <span class="project-screenshots-count">${project.images} screenshots</span>
           <div class="project-preview-overlay">
             <button class="view-gallery-btn">View Gallery</button>
           </div>
         </div>`
      : `<div class="project-preview project-preview--placeholder">
           <span class="project-placeholder-icon">🛒</span>
         </div>`;

    const techTags = project.tech.map(t => `<span>${t}</span>`).join('');

    return `
      <article class="project-card${hasImages ? '' : ' project-card--no-images'}">
        ${preview}
        <div class="project-body">
          <span class="project-type">${project.type}</span>
          <h3>${project.name}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tech">${techTags}</div>
          <div class="project-links">
            <a href="${project.playStore}" target="_blank" rel="noopener" class="store-link store-link--play">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zM14.5 12.707l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.738l-2.808 1.626L15.206 12l2.493-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
              Google Play
            </a>
            <a href="${project.appStore}" target="_blank" rel="noopener" class="store-link store-link--appstore">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.project-preview[data-project]').forEach(el => {
    el.addEventListener('click', () => openModal(el.dataset.project));
  });
}

function openModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project || project.images === 0) return;

  currentProject = project;
  currentImageIndex = 0;
  updateModalImage();

  const modal = document.getElementById('projectModal');
  const info = document.getElementById('modalInfo');
  info.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentProject = null;
}

function updateModalImage() {
  if (!currentProject) return;

  const img = document.getElementById('modalImage');
  const counter = document.getElementById('galleryCounter');
  img.src = getImagePath(currentProject.id, currentImageIndex + 1);
  img.alt = `${currentProject.name} screenshot ${currentImageIndex + 1}`;
  counter.textContent = `${currentImageIndex + 1} / ${currentProject.images}`;
}

function nextImage() {
  if (!currentProject) return;
  currentImageIndex = (currentImageIndex + 1) % currentProject.images;
  updateModalImage();
}

function prevImage() {
  if (!currentProject) return;
  currentImageIndex = (currentImageIndex - 1 + currentProject.images) % currentProject.images;
  updateModalImage();
}

function initModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  modal.querySelector('.gallery-next')?.addEventListener('click', nextImage);
  modal.querySelector('.gallery-prev')?.addEventListener('click', prevImage);

  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
}

function initNav() {
  const header = document.getElementById('header');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  links?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function initReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  let animated = false;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach(counter => {
            const target = parseInt(counter.dataset.target, 10);
            const duration = 1500;
            const start = performance.now();

            function update(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              counter.textContent = Math.floor(eased * target);
              if (progress < 1) requestAnimationFrame(update);
              else counter.textContent = target;
            }

            requestAnimationFrame(update);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const stats = document.querySelector('.hero-stats');
  if (stats) observer.observe(stats);
}

function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

function initLangBars() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.lang-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            requestAnimationFrame(() => { bar.style.width = width; });
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.edu-card').forEach(card => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initModal();
  initNav();
  initReveal();
  initCounters();
  initCursorGlow();
  initLangBars();
});
