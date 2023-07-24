const navItems = document.querySelectorAll('.nav__item');
const sections = document.querySelectorAll('section, main');
const headerHeight = document.querySelector('header').scrollHeight;
let currentSection = '';
let prevSection = '';
const sectionOrder = ['home', 'about', 'techstack', 'projects', 'contact'];

window.addEventListener('scroll', (e) => {
  sections.forEach((section) => {
    const sectionPos = Math.ceil(window.scrollY);
    const sectionTop = section.offsetTop - headerHeight;
    const sectionHeight = section.scrollHeight;
    if (sectionPos >= sectionTop && sectionPos < sectionTop + sectionHeight) {
      currentSection = section.id;
      if (prevSection !== currentSection) {
        const idx_prevSection = sectionOrder.indexOf(prevSection);
        const idx_currentSection = sectionOrder.indexOf(currentSection);
        if (Math.abs(idx_prevSection - idx_currentSection) === 1) {
          navItems.forEach((item) => item.classList.remove('active'));
          const currentItem = document.querySelector(
            `[href="#${section.id}"]`
          ).parentElement;
          currentItem.classList.add('active');
        }
        prevSection = currentSection;
      }
    }
  });
});

// add scroll-padding to navbar
const html = document.querySelector('html');
html.style.setProperty('scroll-padding-top', `${headerHeight}px`);
