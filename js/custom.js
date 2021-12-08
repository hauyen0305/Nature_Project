$(document).ready(function(){

  //Main Slider

  $(".main-slide").owlCarousel(
  {
    loop:true,
    nav:false, /*đổi true là hiện nút, còn false là mất nút*/
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
}
);
  //Product-Box--lists

  $('.product-home .product-box--lists').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:4
        }
    }
})

    //Testtimonials Slider

  $(".testtimonials-box__slider").owlCarousel(
  {
    loop:false,
    nav:false, /*đổi true là hiện nút, còn false là mất nút*/
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
}
);

  //News-Box-lists Slider

  $('.news-box__lists').owlCarousel(
  {
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

  //Brand-Box-lists Slider

  $('.brand-box__lists').owlCarousel(
  {
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

  //Product-Gallery Slider

  $('.product-detail__images--gallery').owlCarousel(
  {
    loop: true,
    margin:15,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});