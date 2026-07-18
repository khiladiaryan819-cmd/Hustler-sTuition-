/*====================================
        PORTFOLIO PRO
====================================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

});

/*====================================
        AOS
====================================*/

AOS.init({

duration:1000,

once:true,

offset:120

});

/*====================================
      TYPING EFFECT
====================================*/

new Typed(".typing",{

strings:[

"Frontend Developer",

"Web Developer",

"Computer Engineering Student",

"UI Enthusiast"

],

typeSpeed:80,

backSpeed:50,

backDelay:1500,

loop:true

});

/*====================================
       MOBILE MENU
====================================*/

const menuBtn=document.getElementById("menu-btn");

const navbar=document.getElementById("navbar");

menuBtn.onclick=()=>{

navbar.classList.toggle("active");

}

/*====================================
      CLOSE MENU
====================================*/

document.querySelectorAll("#navbar a")

.forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

});

});

/*====================================
     ACTIVE NAVBAR
====================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*====================================
      SCROLL PROGRESS BAR
====================================*/

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

progressBar.style.width=progress+"%";

});

/*====================================
      BACK TO TOP
====================================*/

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*====================================
      HEADER SHADOW
====================================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});

/*====================================
      VANILLA TILT
====================================*/

VanillaTilt.init(

document.querySelectorAll(".project-card,.skill-card,.certificate-card,.education-card"),{

max:10,

speed:400,

glare:true,

"max-glare":0.25,

scale:1.02

}

);

/*====================================
     BUTTON RIPPLE EFFECT
====================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.offsetX-diameter/2}px`;

circle.style.top=`${e.offsetY-diameter/2}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*====================================
      CURRENT YEAR
====================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*====================================
        CONSOLE MESSAGE
====================================*/

console.log("%cWelcome to Aryan Portfolio 🚀",
"color:#3b82f6;font-size:18px;font-weight:bold;");

console.log("Designed & Developed by Aryan Rohit Khiladi");

/*====================================
        END OF FILE
====================================*/