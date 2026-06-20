// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);

});


// ==========================
// SCROLL PROGRESS BAR
// ==========================

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});


// ==========================
// DARK MODE
// ==========================

const darkBtn = document.getElementById("dark-mode");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ==========================
// MOBILE MENU TOGGLE
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "20px";
        navLinks.style.background = "#1e293b";
        navLinks.style.gap = "20px";

    }

});


// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target") || +counter.innerText;

        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;

        }

    };

    let finalValue = counter.innerText;

    counter.setAttribute("data-target", finalValue);

    counter.innerText = "0";

    updateCounter();

});


// ==========================
// ACTIVE NAVBAR LINK
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});
// ==========================
// FAQ ACCORDION
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("click", () => {

        const answer = item.querySelector("p");

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});


// ==========================
// TYPING EFFECT
// ==========================

const typingText = document.querySelector(".typing-text");

const texts = [
    "Quality Offline Coaching For KG To 12th",
    "State Board | CBSE | NCERT",
    "Morning & Evening Batches Available",
    "Experienced Teachers & Personal Attention"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {

    if (charIndex < texts[textIndex].length) {

        typingText.textContent += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);

    } else {

        setTimeout(eraseEffect, 2000);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingText.textContent =
            texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 40);

    } else {

        textIndex++;

        if (textIndex >= texts.length) {

            textIndex = 0;

        }

        setTimeout(typeEffect, 500);

    }

}

typingText.textContent = "";

typeEffect();


// ==========================
// TESTIMONIAL AUTO SLIDER
// ==========================

const testimonials = document.querySelectorAll(".testimonial-card");

let currentSlide = 0;

setInterval(() => {

    testimonials.forEach(card => {

        card.style.opacity = "0.4";

        card.style.transform = "scale(0.95)";

    });

    testimonials[currentSlide].style.opacity = "1";

    testimonials[currentSlide].style.transform = "scale(1)";

    currentSlide++;

    if (currentSlide >= testimonials.length) {

        currentSlide = 0;

    }

}, 2500);


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
    ".course-card, .teacher-card, .facility-card, .achievement-card, .testimonial-card, .gallery-card, .why-card, .board-card"
);

window.addEventListener("scroll", () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

});


// Initial State
revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(50px)";

    element.style.transition = "0.8s ease";

});