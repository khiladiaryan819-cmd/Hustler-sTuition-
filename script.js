/*==================================================
        HUSTLER'S TUITION
        SCRIPT.JS PART - 1
==================================================*/

/*==============================
        DOM READY
==============================*/

document.addEventListener("DOMContentLoaded",()=>{

/*==============================
        LOADER
==============================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

}

});

/*==============================
      AOS ANIMATION
==============================*/

if(typeof AOS!=="undefined"){

AOS.init({

duration:1000,

once:true,

offset:120,

easing:"ease-in-out"

});

}

/*==============================
      TYPING EFFECT
==============================*/

if(document.querySelector(".typing")){

new Typed(".typing",{

strings:[

"Best Coaching Classes",

"KG to 12th Classes",

"State Board",

"CBSE Board",

"NCERT",

"Expert Teachers",

"Offline Coaching"

],

typeSpeed:70,

backSpeed:45,

backDelay:1700,

loop:true

});

}

/*==============================
        MOBILE MENU
==============================*/

const menuBtn=document.getElementById("menu-btn");

const navbar=document.getElementById("navbar");

if(menuBtn && navbar){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

menuBtn.classList.toggle("active");

});

}

/*==============================
      CLOSE MENU
==============================*/

document.querySelectorAll("#navbar a")

.forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

menuBtn.classList.remove("active");

});

});

/*==============================
      SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

});
/*==================================================
        SCRIPT.JS PART - 2
==================================================*/

/*==============================
        HEADER
==============================*/

const header=document.getElementById("header");

/*==============================
    PROGRESS BAR
==============================*/

const progressBar=document.getElementById("progress-bar");

/*==============================
    BACK TO TOP
==============================*/

const backToTop=document.getElementById("backToTop");

/*==============================
      NAV LINKS
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#navbar a");

/*==============================
    SCROLL EVENTS
==============================*/

window.addEventListener("scroll",()=>{

const scrollTop=window.pageYOffset;

/*==============================
      HEADER SHADOW
==============================*/

if(header){

if(scrollTop>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

}

/*==============================
    SCROLL PROGRESS
==============================*/

if(progressBar){

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

progressBar.style.width=progress+"%";

}

/*==============================
      BACK TO TOP
==============================*/

if(backToTop){

if(scrollTop>450){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

}

/*==============================
      ACTIVE NAVBAR
==============================*/

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.offsetHeight;

if(scrollTop>=top && scrollTop<top+height){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==============================
    BACK TO TOP CLICK
==============================*/

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==============================
      SCROLL REVEAL
==============================*/

const revealItems=document.querySelectorAll(

".course-card,.teacher-card,.project-card,.gallery-item,.facility-card,.testimonial-card,.contact-card"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});
/*==================================================
        SCRIPT.JS PART - 3
==================================================*/

/*==============================
        VANILLA TILT
==============================*/

if(typeof VanillaTilt!=="undefined"){

VanillaTilt.init(

document.querySelectorAll(

".course-card,.teacher-card,.project-card,.skill-card,.facility-card,.testimonial-card,.contact-card,.why-card"

),

{

max:10,

speed:400,

glare:true,

"max-glare":0.20,

scale:1.02

}

);

}

/*==============================
      RIPPLE EFFECT
==============================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

const radius=diameter/2;

circle.style.width=

circle.style.height=

`${diameter}px`;

circle.style.left=

`${e.offsetX-radius}px`;

circle.style.top=

`${e.offsetY-radius}px`;

circle.classList.add("ripple");

const ripple=

this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*==============================
      COUNTER
==============================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)return;

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const increment=Math.ceil(target/100);

const update=()=>{

current+=increment;

if(current>=target){

counter.innerText=target+"+";

}else{

counter.innerText=current+"+";

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

});

},

{

threshold:.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==============================
      FAQ ACCORDION
==============================*/

document.querySelectorAll(".faq-item")

.forEach(item=>{

const question=

item.querySelector(".faq-question");

if(question){

question.addEventListener("click",()=>{

document.querySelectorAll(".faq-item")

.forEach(f=>{

if(f!==item){

f.classList.remove("active");

}

});

item.classList.toggle("active");

});

}

});

/*==============================
      CURRENT YEAR
==============================*/

const year=document.getElementById("year");

if(year){

year.textContent=

new Date().getFullYear();

}

/*==============================
    CONSOLE MESSAGE
==============================*/

console.clear();

console.log(

"%c🎓 Hustler's Tuition",

"color:#2563eb;font-size:22px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Aryan Rohit Khiladi",

"color:#22c55e;font-size:14px;"

);
/*==================================================
        SCRIPT.JS PART - 4 (FINAL)
==================================================*/

/*==============================
        DARK MODE
==============================*/

const themeBtn=document.getElementById("theme-toggle");

if(themeBtn){

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

localStorage.setItem(

"theme",

document.body.classList.contains("light")

? "light"

: "dark"

);

});

}

/*==============================
      CONTACT FORM
==============================*/

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name=contactForm.querySelector('input[type="text"]');

const email=contactForm.querySelector('input[type="email"]');

const message=contactForm.querySelector("textarea");

if(

!name.value.trim() ||

!email.value.trim() ||

!message.value.trim()

){

alert("Please fill all required fields.");

return;

}

const emailPattern=

/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value)){

alert("Please enter a valid email address.");

return;

}

alert("Thank you! Your message has been submitted.");

contactForm.reset();

});

}

/*==============================
      LAZY LOADING
==============================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("loading","lazy");

img.setAttribute("decoding","async");

});

/*==============================
      IMAGE FALLBACK
==============================*/

document.querySelectorAll("img").forEach(img=>{

img.onerror=function(){

this.src="images/no-image.png";

};

});

/*==============================
      BUTTON HOVER
==============================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});

/*==============================
      PERFORMANCE
==============================*/

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer=setTimeout(()=>{

console.log("Layout Updated");

},200);

});

/*==============================
      PAGE VISIBILITY
==============================*/

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

console.log("Page Hidden");

}else{

console.log("Welcome Back");

}

}

);

/*==============================
      KEYBOARD SHORTCUT
==============================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/*==============================
      FINAL INIT
==============================*/

console.log(

"%cWebsite Loaded Successfully 🚀",

"color:#22c55e;font-size:18px;font-weight:bold;"

);

console.log(

"%cHustler's Tuition Premium Edition",

"color:#3b82f6;font-size:15px;"

);

/*==================================================
              END OF FILE
==================================================*/