
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    function toggleDarkMode() {
      body.classList.toggle('dark-mode');
      darkModeToggle.innerHTML = body.classList.contains('dark-mode') ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }

    // Automatic Color Change
    const heroSection = document.querySelector('.hero');
    const featuresSection = document.querySelector('.features');
    const coursesSection = document.querySelector('.courses');
    

    setInterval(() => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const primaryColor = '#' + randomColor;

      body.style.setProperty('--primary-color', primaryColor);
      heroSection.style.setProperty('--primary-color', primaryColor);
      featuresSection.style.setProperty('--primary-color', primaryColor);
      coursesSection.style.setProperty('--primary-color', primaryColor);
      
    }, 5000);
    
     // JavaScript for Dark Mode Toggle Button
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const contactFormContainer = document.querySelector('.contact-form-container');

toggleDarkModeButton.addEventListener('click', () => {
    // Toggle dark mode class on the contact form container
    contactFormContainer.classList.toggle('dark-mode');
});

  
    // typing-text auto

    var typed = new Typed(".auto-type",{strings:["Software Engineer","Instructor","Coder","Freelancer","Learner"],
    typeSpeed:80,
    backSpeed:70,
    loop:true
  });

  // JavaScript for Scroll-up Button
const scrollUpButton = document.getElementById('scroll-up-button');

scrollUpButton.addEventListener('click', () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show or hide the scroll-up button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUpButton.style.display = 'block';
    } else {
        scrollUpButton.style.display = 'none';
    }
});
