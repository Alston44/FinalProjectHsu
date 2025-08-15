// With this constants, I am saving them to be referenced later in this code block. I will be us using them with an addEventListen. I am locating these specfic elements from my html in the DOM so they can be interacted with later. 
const menu = document.querySelector(".js-menu");
const menuOpen = document.querySelector(".js-menu-open");
const menuClose = document.querySelector(".js-menu-close");

// Both of these addEventListers is what is allowing the user to interact with the DOM. In this case, when they screen becomes a certain size, a menu icon will show-up on the side. When users interact with this menu icon, the functions we created would run. 

menuOpen.addEventListener("click", ()=> {
    menu.classList.add("open");
});

menuClose.addEventListener("click", ()=> {
    menu.classList.remove("open");
});


// This is the code that is neccessary for parallax to be funcitoning. All jQuery selectors typically start with $
$(document).ready(function() {

// here I am calling the class .about-me-ubc, which contains the image that is going to be parallaxed. 
  $(".about-me-ubc").parallax({
        imageSrc: "./images/UBCCampus.jpg"
    });

// Similar explaination as the ubc jQuery. 
  $(".about-me-bcit").parallax({
        imageSrc: "./images/BCITcampus.jpg"
    });

// $(window) is what is selecting the brower window and setting it as a jQuery object. This is want is allowing the plugin to run on the browser. The two triggers are resizing events that are responsive to changes in screen sizes. 
  $(window).trigger('resize').trigger('scroll');

// This is a delay set on the browser screen load. So when the screen loads, there will be a 100 millisecond delay before its jQuery content run. 
  setTimeout(function() {
    $('.parallax-mirror').css('z-index', 'auto');
  }, 100);

   
});


// This is a Gsap plugin
gsap.registerPlugin(ScrollTrigger);

const slides = gsap.utils.toArray(".slide");
// This is what is allowing pauses between slides
const delay = 0.5;
const tl = gsap.timeline({
  defaults: {
    ease: "power1.inOut",
    transformOrigin: "center center -300px"
  },
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "+=" + (slides.length - 1) * 50 + "%",
    pin: true,
    scrub: true,
    markers: true
  }
});

gsap.set(slides, {
  rotationX: (i) => (i ? -90 : 0),
  transformOrigin: "center center -300px"
});

slides.forEach((slide, i) => {
  const nextSlide = slides[i + 1];
  if (!nextSlide) return;
  tl.to(
    slide,
    {
      rotationX: 90,
      onComplete: () => gsap.set(slide, { rotationX: -90 })
    },
    "+=" + delay
  ).to(
    nextSlide,
    {
      rotationX: 0
    },
    "<"
  );
});

// This keeps the final slide on the screen
tl.to({}, { duration: delay });

// DIV removal. The plugin/framework that I used has div's with text that showed up on the screen, so the following code below is what is remove those bulit-in divs from the screen.

 gsap.to(".gsap-marker-end", {
        visibility: "hidden"
    });

gsap.to(".gsap-marker-start", {
         visibility: "hidden"
    });

    
gsap.to(".gsap-marker-scroller-end", {
         visibility: "hidden"
    });

gsap.to(".gsap-marker-scroller-start", {
         visibility: "hidden"
    });

