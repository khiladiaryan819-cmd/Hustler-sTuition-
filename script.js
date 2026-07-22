
/* ==========================================
   HUSTLER'S TUITION
   script.js
========================================== */

"use strict";

/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / height) * 100;

    if(progressBar){

        progressBar.style.width =
            progress + "%";

    }

});


/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!navbar || !hero) return;

    if (window.scrollY >= hero.offsetHeight - 100) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 120;

        const height =
            section.offsetHeight;

        if(window.scrollY >= top){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){

            link.classList.add("active");

        }

    });

});
/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}


/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

        if (menuBtn) {

            menuBtn.classList.remove("active");

        }

    });

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==========================================
   SMOOTH SCROLL FOR NAVIGATION
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 80,

            behavior: "smooth"

        });

    });

});
/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 100;

        function updateCounter() {

            if (current < target) {

                current += increment;

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        }

        updateCounter();

    });

}


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
".course-card, .teacher-card, .facility-card, .stat-box, .feature-box, .board-card, .why-card, .gallery-card, .testimonial-card, .topper-card, .contact-card, .achievement-card"
);

function revealOnScroll() {

    const triggerPoint = window.innerHeight - 120;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {

            element.classList.add("show");

        }

    });

}


/* ==========================================
   START COUNTER WHEN SECTION APPEARS
========================================== */

const counterSection = document.querySelector(".counter-section");

window.addEventListener("scroll", () => {

    revealOnScroll();

    if (counterSection) {

        const sectionTop = counterSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 120) {

            startCounter();

        }

    }

});


/* ==========================================
   RUN ON PAGE LOAD
========================================== */

window.addEventListener("load", () => {

    revealOnScroll();

});


/* ==========================================
   HERO FADE EFFECT
========================================== */


window.addEventListener("scroll", () => {

    if (!hero) return;

    hero.style.opacity = 1 - (window.scrollY / 900);

});


/* ==========================================
   COURSE CARD STAGGER ANIMATION
========================================== */

const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.15}s`;

});
/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    if (answer) {

        answer.style.display = "none";

    }

    item.addEventListener("click", () => {

        const isOpen = answer.style.display === "block";

        faqItems.forEach(faq => {

            const p = faq.querySelector("p");

            if (p) {

                p.style.display = "none";

            }

            faq.classList.remove("active");

        });

        if (!isOpen) {

            answer.style.display = "block";

            item.classList.add("active");

        }

    });

});


/* ==========================================
   TESTIMONIAL AUTO SLIDER
========================================== */

const testimonials = document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function testimonialSlider() {

    if (testimonials.length === 0) return;

    testimonials.forEach(card => {

        card.classList.remove("active");

    });

    testimonials[testimonialIndex].classList.add("active");

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {

        testimonialIndex = 0;

    }

}

testimonialSlider();

setInterval(testimonialSlider, 3000);


/* ==========================================
   CARD HOVER ANIMATION
========================================== */

const cards = document.querySelectorAll(

".course-card, .teacher-card, .facility-card, .board-card, .why-card"

);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

const galleryImages = document.querySelectorAll(".gallery-card img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});
/* ==========================================
   DARK MODE TOGGLE
========================================== */

const darkModeBtn = document.querySelector(".dark-mode-btn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode")
                ? "dark"
                : "light"
        );

    });

}

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }

});


/* ==========================================
   ADMISSION FORM VALIDATION
========================================== */

const scriptURL = "https://script.google.com/macros/s/AKfycbzsTfi-xiUVbchfiCWUULmxXKEdVVfCe69nRgtuzxggCf3zPIKl2tp_aAxbz4BjhQQX/exec";


const form = document.getElementById("admissionForm");

let lastSubmitTime = 0;



if(form){


form.addEventListener("submit", async function(e){


    e.preventDefault();



    const currentTime = Date.now();



    // Spam Protection
    if(currentTime - lastSubmitTime < 10000){

        showError("Please wait before submitting again.");

        return;

    }



    lastSubmitTime = currentTime;



    const studentName =
    document.getElementById("studentName").value.trim();



    const parentName =
    document.getElementById("parentName").value.trim();



    const email =
    document.getElementById("email").value.trim();



    const mobile =
    document.getElementById("mobileNumber").value.trim();



    const studentClass =
    document.getElementById("studentClass").value;



    const board =
    document.getElementById("board").value;



    const address =
    document.getElementById("address").value.trim();





    // Validation


    if(studentName.length < 3){

        showError("Please enter valid student name.");

        return;

    }



    if(parentName.length < 3){

        showError("Please enter valid parent name.");

        return;

    }



    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){


        showError("Please enter valid email address.");

        return;

    }




    if(!/^[0-9]{10}$/.test(mobile)){


        showError("Mobile number must be 10 digits.");

        return;

    }




    if(studentClass === ""){


        showError("Please select class.");

        return;

    }




    // Loading Start


    const submitBtn =
    document.getElementById("submitBtn");


    const btnText =
    document.getElementById("btnText");


    const loader =
    document.getElementById("loader");



    submitBtn.disabled = true;

    btnText.innerText = "Submitting...";

    loader.classList.remove("hidden");





    const data = {


        studentName,

        parentName,

        email,

        mobileNumber:mobile,

        studentClass,

        board,

        address


    };





    try{


        const response = await fetch(scriptURL,{


            method:"POST",


            redirect:"follow",


            headers:{


                "Content-Type":
                "text/plain;charset=UTF-8"


            },


            body:JSON.stringify(data)


        });





        const result =
        await response.json();





        if(result.status==="success"){



            showSuccess();



            form.reset();



        }

        else{


            showError(result.message);


        }




    }



    catch(error){


        console.error(error);


        showError(
        "Submission failed. Please try again."
        );


    }




    finally{


        submitBtn.disabled=false;


        btnText.innerText="Apply Now";


        loader.classList.add("hidden");


    }



});

}




// Success Popup

function showSuccess(){


    document.getElementById("successPopup")
    .style.display="flex";


}




// Error Popup

function showError(message){


    document.getElementById("errorMessage")
    .innerText=message;


    document.getElementById("errorPopup")
    .style.display="flex";


}





// Close Popup

function closePopup(id){


    document.getElementById(id)
    .style.display="none";


}
/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* ==========================================
   LAZY IMAGE ANIMATION
========================================== */

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.setAttribute("loading", "lazy");

});


/* ==========================================
   YEAR AUTO UPDATE
========================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
"%cHustler's Tuition Website Loaded Successfully!",
"color:#facc15;font-size:18px;font-weight:bold;"
);

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }

    });

    scrollTopBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}