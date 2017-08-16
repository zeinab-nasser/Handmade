/*global $*/
$(document).ready(function () {
    'use strict';
    /*cover
    $('.cover .slide-show .image1').fadeToggle(3000, function () {
        $('.cover .slide-show .image1').hide();
        $('.cover .slide-show .image2').fadeToggle(3000, function () {
            $('.cover .slide-show .image2').hide();
            $('.cover .slide-show .image3').fadeToggle(3000);
        });
    });*/

    /*navbar*/
    $(window).on('scroll', function () {
      var sc = $(document).scrollTop();
      if (sc > 237){
        $('nav').addClass('navbar-fixed-top');
      }else {
        $('nav').removeClass('navbar-fixed-top');
      }
    });
    /*search*/
    $('.header .icon').click(function (){
      $('this').hide();
      $('input-group').fadeIn();
    });


    /*home*/
    /*parts*/
    $('.parts .home li').hover(function () {
      $(this).css({borderLeft:'4px solid #009688'});
      $('.parts .home li').not(this).css({borderLeft:'none'});
    });
    $('.parts .home li').mouseleave(function () {
      $(this).css({borderLeft:'none'});
    });
    $('.parts .home li').click(function () {
      $(this).css({borderLeft:'4px solid #009688'});
      $('.parts .home li').not(this).css({borderLeft:'none'});
    });

    $('.parts .block').hover(function () {
      $(this).find('h5').fadeIn(500);
      $('.parts .block').not(this).find('h5').fadeOut(500);
    });
    $('.parts .block').mouseleave(function () {
      $(this).find('h5').fadeOut(500);
    });
    $('.recent-added .block').hover(function () {
      $(this).find('h5').fadeIn(500);
      $('.recent-added .block').not(this).find('h5').fadeOut(500);
    });
    $('.recent-added .block').mouseleave(function () {
      $(this).find('h5').fadeOut(500);
    });

    /*preview -home-*/
    $('.details .preview img').hover(function () {
      $(this).css({filter: 'grayscale(50%)'});
    });
    $('.details .preview img').mouseleave(function () {
      $(this).css({filter: 'grayscale(0%)'});
    });



    /*slider*/
    $('.slider .owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        stagePadding: 0,
        smartSpeed: 450,
        autoplay: true,
        loop: true,
    });

    /**slide-show**/
    $('.slide-show .owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      margin:10,
      responsiveClass:true,
      responsive:{
        0:{
          items:2,
          nav:true
        },
        600:{
          items:3,
          nav:false
        },
        700:{
          items:4,
          nav:false
        },
        1000:{
          items:5,
          nav:false,
        }
      }
    });/*end of slide-show*/

    /**preview**/
    $('.preview .owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      margin:10,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:1,
          nav:false
        },
        700:{
          items:1,
          nav:false
        },
        1000:{
          items:1,
          nav:false,
        }
      }
    });

});
