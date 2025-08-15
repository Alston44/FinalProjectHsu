// With this constants, I am saving them to be referenced later in this code block. I will be us using them with an addEventListen. I am locating these specfic elements from my html in the DOM so they can be interacted with later. 
const menu = document.querySelector(".js-menu");
const menuOpen = document.querySelector(".js-menu-open");
const menuClose = document.querySelector(".js-menu-close");

// Both of these addEventListeners is what is allowing the user to interact with the DOM. In this case, when they screen becomes a certain size, a menu icon will show-up on the side. When users interact with this menu icon, the functions we created would run. 
menuOpen.addEventListener("click", ()=> {
    menu.classList.add("open");
});

menuClose.addEventListener("click", ()=> {
    menu.classList.remove("open");
});

// element argument can be a selector string
//   for an individual element
// This is the JS code that is plugin in from flickity to allow for their carousel function to run. Depending on what I place into this function, the carousel will run it. 
var flkty = new Flickity( '.carousel', {
    imagesLoaded: true,
    percentPosition: false,
    wrapAround: true

  });


// This is the jQuery that is allowing the background video to be playing. .banner-video is the class that my background video is in. 
$(document).ready(function(){
	$('.banner-video').bgVideo();
});
  