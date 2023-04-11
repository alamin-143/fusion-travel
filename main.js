$(document).ready(function(){
   const menuIcon = document.getElementById('menu-icon');
   const menu = document.getElementById('menu');

   menuIcon.addEventListener("click", ()=>{
      if(menu.className === 'hidden'){
         menu.classList.remove('hidden')
      }
      else{
         menu.classList.add('hidden')
      }
   });

   $('.fusion-body').owlCarousel({
      nav: false,
      dots: true,
      loop: true,
      dotsEach: 2,
      slideBy: 3,
      autoplay: true,
      responsive:{
         0:{
             items:1
         },
         768:{
             items:2
         },
         992:{
             items:3
         },
         1000:{
             items:3
         }
     }
   });
   $('.client-active').owlCarousel({
      nav: false,
      dots: true,
      loop: true,
      dotsEach: 1,
      slideBy: 1,
      autoplay: true,
      responsive:{
         0:{
             items:1
         },
         768:{
             items:1
         },
         992:{
             items:1
         },
         1000:{
             items:1
         }
     }
   });
});