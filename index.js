var swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   pagination: {
     el: ".swiper-pagination",
   },
 });
 var swiperr = new Swiper(".mySwiperr", {
   slidesPerView: 3,
   spaceBetween: 30,
   paagination: {
     el: ".swiper-paagination",
     clickable: true,
   },
 });