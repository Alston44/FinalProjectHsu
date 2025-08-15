// With this constants, I am saving them to be referenced later in this code block. I will be us using them with an addEventListen. I am locating these specfic elements from my html in the DOM so they can be interacted with later. 
const menu = document.querySelector(".js-menu");
const menuOpen = document.querySelector(".js-menu-open");
const menuClose = document.querySelector(".js-menu-close");

menuOpen.addEventListener("click", ()=> {
    menu.classList.add("open");
});

menuClose.addEventListener("click", ()=> {
    menu.classList.remove("open");
});

// Type it js that will allow me to make customizations to the plugin. For instance, what is being typed out, or what speed I want the text to type out in. 
new TypeIt(".ProjectText", {
  strings: "Projects I've done so far!",
  speed: 60,
  loop: true,
}).go();


// This is an Animate on scroll, and in this piece of code I am able to adjust the duration of how fast I want the items to come in as the user scrolls.
AOS.init({
  duration:1200,
});
