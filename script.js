/* =======================
   MENU ICON TOGGLE (Mobile)
======================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* =======================
   ACTIVE NAVBAR LINK ON SCROLL
======================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });

    /* When user scrolls, close menu automatically */
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};

/* =======================
   SKILL BAR ANIMATION 
======================= */
const skillBars = document.querySelectorAll('.skill-level');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width; 
        bar.style.width = "0"; // reset for animation

        setTimeout(() => {
            bar.style.width = width; // animate to given width
        }, 300);
    });
};

/* Trigger animation when Skills section is visible */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.4 });

observer.observe(document.querySelector('.skills'));
