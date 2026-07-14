/*==================================================
        HUSTLER'S TUITION
        SCRIPT.JS (FINAL)
        PART - 1
==================================================*/

"use strict";

/*=========================================
    DOM ELEMENTS
=========================================*/

const body = document.body;

const navbar = document.querySelector(".navbar");

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const topBtn = document.getElementById("topBtn");

const progressBar = document.getElementById("progress-bar");

const loader = document.querySelector(".loader");

const navItems = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section");


/*=========================================
    PAGE LOADER
=========================================*/

window.addEventListener("load", () => {

    if (loader) {

        loader.classList.add("loader-hide");

        setTimeout(() => {

            loader.remove();

        }, 500);

    }

});


/*=========================================
    MOBILE MENU
=========================================*/

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("active");

        navLinks.classList.toggle("active");

        body.classList.toggle("menu-open");

    });

}


/*=========================================
    CLOSE MENU AFTER CLICK
=========================================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks.classList.contains("active")) {

            navLinks.classList.remove("active");

            menuBtn.classList.remove("active");

            body.classList.remove("menu-open");

        }

    });

});


/*=========================================
    STICKY NAVBAR
=========================================*/

function stickyNavbar() {

    if (!navbar) return;

    if (window.scrollY > 60) {

        navbar.classList.add("sticky");

    }

    else {

        navbar.classList.remove("sticky");

    }

}


/*=========================================
    SCROLL PROGRESS BAR
=========================================*/

function updateProgressBar() {

    if (!progressBar) return;

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

}


/*=========================================
    BACK TO TOP BUTTON
=========================================*/

function toggleTopButton() {

    if (!topBtn) return;

    if (window.scrollY > 350) {

        topBtn.classList.add("show");

    }

    else {

        topBtn.classList.remove("show");

    }

}


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*=========================================
    ACTIVE NAVIGATION
=========================================*/

function activeNavigation() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (

            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight

        ) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") ===
            "#" + current

        ) {

            link.classList.add("active");

        }

    });

}


/*=========================================
    SMOOTH SCROLL
=========================================*/

document
.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
            document.querySelector(

                this.getAttribute("href")

            );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/*=========================================
    WINDOW SCROLL
=========================================*/

window.addEventListener("scroll", () => {

    stickyNavbar();

    updateProgressBar();

    toggleTopButton();

    activeNavigation();

});
/*==================================================
        SCRIPT.JS (FINAL)
        PART - 2
==================================================*/


/*=========================================
    COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;
        const speed = 120;
        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / speed);

            count += increment;

            if (count >= target) {

                counter.textContent = target;

                observer.unobserve(counter);

                return;

            }

            counter.textContent = count;

            requestAnimationFrame(updateCounter);

        };

        updateCounter();

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => counterObserver.observe(counter));


/*=========================================
    SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(

".course-card, .teacher-card, .achievement-card, .gallery-card, .facility-card, .why-card, .testimonial-card, .contact-card, .faq-item, .info-card"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

revealItems.forEach(item => revealObserver.observe(item));


/*=========================================
    FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*=========================================
    HERO TYPING EFFECT
=========================================*/

const typingText = document.querySelector(".typing-text");

if (typingText) {

const words = [

"Quality Offline Coaching",

"KG To 12th Classes",

"State Board • CBSE • NCERT",

"Personal Attention",

"Regular Weekly Tests"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

const currentWord = words[wordIndex];

if (!deleting) {

typingText.textContent =
currentWord.substring(0, charIndex + 1);

charIndex++;

if (charIndex === currentWord.length) {

deleting = true;

setTimeout(typingEffect, 1800);

return;

}

}

else {

typingText.textContent =
currentWord.substring(0, charIndex - 1);

charIndex--;

if (charIndex === 0) {

deleting = false;

wordIndex++;

if (wordIndex >= words.length) {

wordIndex = 0;

}

}

}

setTimeout(

typingEffect,

deleting ? 40 : 80

);

}

typingEffect();

}


/*=========================================
    TESTIMONIAL SLIDER
=========================================*/

const testimonials =
document.querySelectorAll(".testimonial-card");

let currentSlide = 0;

function showSlide(index) {

testimonials.forEach(card => {

card.classList.remove("active");

});

testimonials[index].classList.add("active");

}

if (testimonials.length > 0) {

showSlide(currentSlide);

setInterval(() => {

currentSlide++;

if (currentSlide >= testimonials.length) {

currentSlide = 0;

}

showSlide(currentSlide);

}, 4000);

}
/*==================================================
        SCRIPT.JS (FINAL)
        PART - 3
==================================================*/


/*=========================================
    ADMISSION FORM
=========================================*/

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const studentClass = document.getElementById("class").value.trim();

        const board = document.getElementById("board").value;

        const mobile = document.getElementById("mobile").value.trim();

        const message = document.getElementById("message").value.trim();

        if (!name || !studentClass || !board || !mobile) {

            alert("Please fill all required fields.");

            return;

        }

        if (!/^[0-9]{10}$/.test(mobile)) {

            alert("Please enter a valid 10 digit mobile number.");

            return;

        }

        const whatsappMessage =

`🎓 New Admission Enquiry

👤 Student Name : ${name}

🏫 Class : ${studentClass}

📚 Board : ${board}

📱 Mobile : ${mobile}

📝 Message :

${message}`;

        window.open(

`https://wa.me/917038742339?text=${encodeURIComponent(whatsappMessage)}`,

"_blank"

);

        admissionForm.reset();

    });

}


/*=========================================
    THEME TOGGLE
=========================================*/

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        localStorage.setItem(

            "theme",

            document.body.classList.contains("dark-mode")

            ? "dark"

            : "light"

        );

    });

}


/*=========================================
    GALLERY LIGHTBOX
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-card img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "lightbox";

        overlay.innerHTML = `

        <span class="close-lightbox">&times;</span>

        <img src="${image.src}" alt="${image.alt}">

        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});


/*=========================================
    REDUCED MOTION SUPPORT
=========================================*/

if (

window.matchMedia("(prefers-reduced-motion: reduce)").matches

) {

    document.documentElement.style.scrollBehavior = "auto";

}


/*=========================================
    PAGE INITIALIZATION
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    stickyNavbar();

    updateProgressBar();

    toggleTopButton();

    activeNavigation();

});