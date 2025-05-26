// =====================
// 1. Course Details Toggle (yeh code sabse upar rakhiye)
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
  // 2. Registration form validation (yeh code jaisa hai waise hi rehne dijiye)
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
    alert('Registration successful! Welcome, ' + name + '!');
    regForm.reset();
    // Yeh line add karo:
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
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