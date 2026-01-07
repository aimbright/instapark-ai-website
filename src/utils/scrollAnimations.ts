// Utility functions for scroll-triggered animations

let animationObserver: IntersectionObserver | null = null;
const observedElements = new Set<Element>();

export const initScrollAnimations = () => {
  // Clear existing observer if any
  if (animationObserver) {
    observedElements.forEach((el) => animationObserver?.unobserve(el));
    observedElements.clear();
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animated class with a small delay for visibility
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, 100);
        
        // Handle stagger animations
        const staggerContainer = entry.target.querySelector('.stagger-container');
        if (staggerContainer) {
          const children = Array.from(staggerContainer.children);
          children.forEach((child, index) => {
            setTimeout(() => {
              (child as HTMLElement).classList.add('animated');
            }, 200 + (index * 100));
          });
        }
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
  animatedElements.forEach((el) => {
    animationObserver?.observe(el);
    observedElements.add(el);
  });

  // Observe stagger containers
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach((container) => {
    const children = Array.from(container.children);
    children.forEach((child, index) => {
      (child as HTMLElement).style.transitionDelay = `${index * 0.15}s`;
    });
    if (!observedElements.has(container)) {
      animationObserver?.observe(container);
      observedElements.add(container);
    }
  });

  // Observe all sections for automatic animation (except hero)
  const sections = document.querySelectorAll('section:not(#home)');
  sections.forEach((section) => {
    if (!section.classList.contains('animate-on-scroll') && !observedElements.has(section)) {
      section.classList.add('animate-on-scroll');
      animationObserver?.observe(section);
      observedElements.add(section);
    }
  });

  // Animate hero section immediately on load
  const heroSection = document.querySelector('#home');
  if (heroSection) {
    setTimeout(() => {
      heroSection.classList.add('animated');
    }, 200);
  }
};

export const addStaggerAnimation = (
  container: HTMLElement,
  delay: number = 0.1
) => {
  const children = Array.from(container.children);
  children.forEach((child, index) => {
    (child as HTMLElement).style.opacity = '0';
    (child as HTMLElement).style.transform = 'translateY(30px)';
    (child as HTMLElement).style.transition = `opacity 0.6s ease-out ${index * delay}s, transform 0.6s ease-out ${index * delay}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            (child as HTMLElement).style.opacity = '1';
            (child as HTMLElement).style.transform = 'translateY(0)';
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  observer.observe(container);
  return () => observer.unobserve(container);
};

