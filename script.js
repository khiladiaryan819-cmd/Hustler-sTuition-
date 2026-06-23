// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }

});

// ==========================
// ELEMENTS
// ==========================

const topBtn = document.getElementById("topBtn");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

// ==========================
// SCROLL EVENTS
// ==========================

window.addEventListener("scroll", () => {

    // Progress Bar
    const progressBar = document.getElementById("progress-bar");

    if (progressBar) {
        let scrollTop = document.documentElement.scrollTop;

        let scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        let progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";
    }

    // Back To Top Button
    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    // Sticky Navbar
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    // Active Navigation
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {
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
// BACK TO TOP
// ==========================

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ==========================
// MOBILE MENU
// ==========================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.getAttribute("data-target"));

    counter.innerText = "0";

    const updateCounter = () => {

        const current = Number(counter.innerText);

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText =
                Math.min(current + increment, target);

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            if (navLinks) {
                navLinks.classList.remove("active");
            }

        }

    });

});

// ==========================
// FAQ ACCORDION
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("click", () => {

        const answer = item.querySelector("p");

        if (!answer) return;

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

if (typingText) {

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

            typingText.textContent +=
                texts[textIndex].charAt(charIndex);

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

}

// ==========================
// TESTIMONIAL SLIDER
// ==========================

const testimonials =
    document.querySelectorAll(".testimonial-card");

if (testimonials.length > 0) {

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

}

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
    ".course-card, .teacher-card, .facility-card, .achievement-card, .testimonial-card, .gallery-card, .why-card, .board-card, .fee-card, .contact-card"
);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "0.8s ease";

});

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ==========================
// ADMISSION FORM + WHATSAPP
// ==========================

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const studentClass = document.getElementById("class").value.trim();
        const board = document.getElementById("board").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Please enter a valid 10 digit mobile number");
            return;
        }

        const whatsappMessage =
`🎓 New Admission Enquiry

👤 Student Name: ${name}
🏫 Class: ${studentClass}
📚 Board: ${board}
📱 Mobile: ${mobile}

✍ Message:
${message}`;

        const whatsappURL =
            `https://wa.me/917038742339?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        admissionForm.reset();

    });

}

// ==========================
// SCROLLREVEAL LIBRARY
// ==========================

if (typeof ScrollReveal !== "undefined") {

    ScrollReveal({
        distance: "80px",
        duration: 100,
        delay: 80
    });

    ScrollReveal().reveal(
        ".hero-content, .hero-image, .section-title",
        { origin: "top" }
    );

    ScrollReveal().reveal(
        ".course-card, .facility-card, .teacher-card, .achievement-card, .fee-card, .contact-card",
        { origin: "bottom", interval: 100 }
    );

    ScrollReveal().reveal(
        ".about-content, .glass-card-large",
        { origin: "left" }
    );

    ScrollReveal().reveal(
        ".about-card",
        { origin: "right" }
    );

}