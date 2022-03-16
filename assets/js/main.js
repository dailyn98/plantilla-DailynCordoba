  //testimonial
 $('.testimonial-slider').owlCarousel({
  //autoplayhoverpause: true,
  //autoplaytimeout:100,
  items: 1,
  nav: true,
  loop: false,
  //animateOut: 'fadeOut',
 // video: true
 responsiveClass:true,
 responsive:{
     0:{
         items:1,
         margin:10,
     },
     400:{
         items:1,
         margin:30,
         stagePadding:100,
     },
     800:{
         items:3,
         margin:10,
     },
     1000:{
         items:1,
        nav:true,
     }
 }
});

$('.productos-crousel').owlCarousel({
    loop:false,
    nav:false,
    //autoplay:true,
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
            stagePadding:100,
        },
        800:{
            items:3,
            margin:10,
        },
        1000:{
            items:3,
            margin:30,
            stagePadding:250,
        }
    }
})
 const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = ()=>{
    widget.style.display="none";
    post.style.display="block";
    editBtn.onclick = ()=>{
        widget.style.display="block";
        post.style.display="none";
    }
    return false;
}
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });
  
  
//  const navbarMenu = document.getElementById("menu");
  //const burgerMenu = document.getElementById("burger");
  //const bgOverlay = document.getElementById("overlay");
  
  // Show Menu when Click the Burger
  // Hide Menu when Click the Overlay
 // if (burgerMenu && navbarMenu && bgOverlay) {
//   burgerMenu.addEventListener("click", () => {
  //        navbarMenu.classList.toggle("is-active");
//      bgOverlay.classList.toggle("is-active");
//   });
  
  //    bgOverlay.addEventListener("click", () => {
    //      navbarMenu.classList.toggle("is-active");
     //     bgOverlay.classList.toggle("is-active");
    //  });
 // }


