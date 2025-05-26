// =====================
// 1. Course Details Toggle
document.querySelectorAll('.course-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const moreText = this.nextElementSibling;
      if (moreText) {
        if (moreText.style.display === 'block') {
          moreText.style.display = 'none';
          this.textContent = 'Learn More';
        } else {
          moreText.style.display = 'block';
          this.textContent = 'Show Less';
        }
      }
    });
  });
  
  // =====================
  // 2. Registration form validation
  const regForm = document.querySelector('.registration-section form');
if (regForm) {
  regForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = regForm.querySelector('#name').value.trim();
    const email = regForm.querySelector('#email').value.trim();
    const password = regForm.querySelector('#password').value.trim();
    const course = regForm.querySelector('#course').value;
    if (!name || !email || !password || !course) {
      alert('Please fill all the fields and select a course.');
      return;
    }
    regForm.reset();
    window.location.href = "registration-success.html";
  });
}
  
  // =====================
  // 3. Contact form validation (yeh code bhi waise hi rehne dijiye)
  const contactForm = document.querySelector('.contact-section form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contactForm.querySelector('#contact-name').value.trim();
    const email = contactForm.querySelector('#contact-email').value.trim();
    const message = contactForm.querySelector('#contact-message').value.trim();
    if (!name || !email || !message) {
      alert('Please fill all the fields in the contact form.');
      return;
    }
    contactForm.reset();
    window.location.href = "thankyou.html"; // thank you page open
  });
}


// =====================
// 4. Dark/Light Theme Toggle (sun/moon button logic)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeToggle && themeIcon) {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
  } else {
    themeIcon.textContent = '🌙';
  }

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeIcon.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeIcon.textContent = '🌙';
    }
  });
}

// =====================
// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const item = this.parentElement;
      // Close other open FAQs (only 1 open at a time)
      document.querySelectorAll('.faq-item').forEach(function(other) {
        if (other !== item) other.classList.remove('active');
      });
      // Toggle current
      item.classList.toggle('active');
    });
  });

  // =====================
// Testimonials Slider
(function(){
    const cards = document.querySelectorAll('.testimonials-grid .testimonial-card');
    const prev = document.querySelector('.slider-arrow.prev');
    const next = document.querySelector('.slider-arrow.next');
    let current = 0;
    let interval;
  
    function showTestimonial(idx) {
      cards.forEach((card, i) => {
        card.classList.toggle('active', i === idx);
      });
    }
  
    function nextSlide() {
      current = (current + 1) % cards.length;
      showTestimonial(current);
    }
  
    function prevSlide() {
      current = (current - 1 + cards.length) % cards.length;
      showTestimonial(current);
    }
  
    if(cards.length && prev && next){
      showTestimonial(current);
  
      next.addEventListener('click', () => {
        nextSlide();
        resetAuto();
      });
      prev.addEventListener('click', () => {
        prevSlide();
        resetAuto();
      });
  
      function autoSlide(){
        interval = setInterval(nextSlide, 4000);
      }
      function resetAuto(){
        clearInterval(interval);
        autoSlide();
      }
  
      autoSlide();
    }
  })();

  