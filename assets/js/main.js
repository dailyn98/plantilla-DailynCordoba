  //testimonial
 $('.testimonial-slider').owlCarousel({
  //autoplayhoverpause: true,
  //autoplaytimeout:100,
  //animateOut: 'fadeOut',
 // video: true
    loop:true,
    autoplayTimeout: 4000,
    autoplay:true,
    smartSpeed: 400,
    center: true,
 responsiveClass:true,
 responsive:{
     0:{
         items:1,
         margin:80,
     },
     400:{
         items:1,
     },
     700:{
         items:1,
         margin:100,
     },
     1000:{
         items:1,
         nav:true,
     }
 }
});

$('.productos-crousel').owlCarousel({
    loop:true,
    nav:false,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    autoplay:true,
    //autoplayTimeout:1000,
    //autoplayHoverPause:true,   
    //nav: false,
    //rewind: false,    
    
    dotsEach:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:10,
        },
        400:{
            items:1,
            margin:30,
        },
        768:{
            items:3,
           // margin:10,
        },
        1000:{
            items:3,
            margin:30,
            //stagePadding:40,
        }
    }
})

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });


  const navbarMenu = document.getElementById("menu");
  const burgerMenu = document.getElementById("burger");
  const bgOverlay = document.getElementById("overlay");
  
  // Show Menu when Click the Burger
  // Hide Menu when Click the Overlay
  if (burgerMenu && navbarMenu && bgOverlay) {
      burgerMenu.addEventListener("click", () => {
          navbarMenu.classList.toggle("is-active");
          bgOverlay.classList.toggle("is-active");
      });
  
      bgOverlay.addEventListener("click", () => {
          navbarMenu.classList.toggle("is-active");
          bgOverlay.classList.toggle("is-active");
      });
  }
  
  // Hide Menu when Click the Links
  document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", () => {
          navbarMenu.classList.remove("is-active");
          bgOverlay.classList.remove("is-active");
      });
  });

