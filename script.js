const projects = [
  {
    title: "Real time Sign language detection with conversational chatbot",
    description: "Developed a Real-time sign-to-text using MediaPipe hand tracking and a custom ML model for A–Z (plus space/delete), with outputs sent to a Google AI chatbot for live Q&A. If the “H” gesture is detected more than twice consecutively, the system issues an emergency alert to the user’s device.",
    image: "images/sign.png",
    tags: ["mediapipe", "flask", "API", "machine learning"],
    githubLink: "https://github.com/manojkumarGgithub/signbot",
    demoVideo: "videos/sign.mp4"
  },
  {
    title: "Study buddy",
    description: "Developed a secure, user-friendly online learning platform for 10th-grade students—featuring authenticated access, comprehensive study materials (textbooks, blueprints, past papers), mock tests, and real-time exam updates—plus a feedback system for students to share suggestions directly with admins",
    image: "images/studybuddy.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Mysql"],
    githubLink: "https://github.com/manojkumarGgithub/gradguy",
    demoVideo: "videos/gradguy.mp4"
  }
];

// Function to generate project cards
function generateProjectCards() {
  const projectsGrid = document.getElementById('projects-grid');

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
      <div class="project-image" style="background-image: url('${project.image}')"></div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.githubLink}" class="view-project" target="_blank">View on GitHub</a>
          ${project.demoVideo ? `<a href="${project.demoVideo}" class="demo-video" target="_blank">🎥 Watch Demo</a>` : ''}
        </div>
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });
}

// Mobile navigation toggle
function navSlide() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}

// Form submission
function handleFormSubmission() {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      console.log('Form Submission:', { name, email, message });
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
}

// Smooth scrolling
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        const nav = document.querySelector('.nav-links');
        if (nav.classList.contains('nav-active')) {
          document.querySelector('.burger').click();
        }
      }
    });
  });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  generateProjectCards();
  navSlide();
  handleFormSubmission();
  initSmoothScroll();
});
