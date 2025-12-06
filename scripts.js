// Simple JS for mobile nav and demo contact form
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
  
      // Close nav on link click (mobile)
      navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          navLinks.classList.remove("open");
        }
      });
    }
  
    // Contact form demo handler
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = contactForm.querySelector("#name").value.trim();
        const email = contactForm.querySelector("#email").value.trim();
  
        if (!name || !email) {
          alert("Please fill in Name and Email.");
          return;
        }
  
        alert("Thank you! This is a demo form. Connect it to your backend/email service.");
        contactForm.reset();
      });
    }
  
    // Footer year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  