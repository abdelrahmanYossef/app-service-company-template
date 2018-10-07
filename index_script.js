
//Begining Code

// some begining animation

function header1 (){

  $('.heading_title1 h1').css('opacity', '1');
  $('.heading_title1 h1').css('transform', 'scale(1.1)');
  $('.heading_title1 p').css('opacity', '1');
  $('.heading_title1 p').css('transitionDelay', '.4s');
  $('.heading_title1 button').css('opacity', '1');
  $('.heading_title1 button').css('transitionDelay', '.8s');
}

function header2() {
  $('.heading_title2 h1').css('opacity', '1');
  $('.heading_title2 h1').css('transform', 'scale(1.1)');
  $('.heading_title2 p').css('opacity', '1');
  $('.heading_title2 p').css('transitionDelay', '.4s');
  $('.heading_title2 button').css('opacity', '1');
  $('.heading_title2 button').css('transitionDelay', '.8s');
}

// Dynamic begining

$(document).ready(function(){

  header1();
  header2();

// Navbar logo animation

  var begin = 250;
  var navOff = $(window).scrollTop();

  $('.navBox .img_logo img').last().css('display', 'none');
  $('.navBox .img_logo img').first().css('display', 'block');
  if(navOff > begin){
    $('.navBox .img_logo img').last().css('display', 'block');
    $('.navBox .img_logo img').first().css('display', 'none');
  }

  // Home slider

var owl = $('.owl-carousel');
 owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});

$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel', [500]);
})

$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [500]);
})

//Buttons Nav

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// --------------------
// animation type

var typed = new Typed('.auto_type', {
  strings: ["softwares", "apps","websites"],
  typeSpeed:40,
  backDelay: 2000,
  backSpeed: 30,
  loop:true
});

// -----------------------
// Navbar animation

var about = $('#about').offset().top;

var list = $('.navBox .nav_list li a');

$(window).scroll(function(){

  var navOff = $(window).scrollTop();

  if(navOff > begin ){
    $('.navBox').css('backgroundColor', '#fff');
    $('.navBox .nav_list a').css('color', '#000');
    $('.navBox .social_nav a').css('color', '#000');
    $('.navBox').css('height', '60');
    $('.navBox .img_logo img').first().css('display', 'none');
    $('.navBox .img_logo img').last().css('display', 'block');
  } 

  else{
    $('.navBox').css('backgroundColor', 'transparent');
    $('.navBox .nav_list a').css('color', '#fff');
    $('.navBox .social_nav a').css('color', '#fff');
    $('.navBox').css('height', '80');
    $('.navBox .img_logo img').first().css('display', 'block');
    $('.navBox .img_logo img').last().css('display', 'none');
  }

})

// Tabs nav

$('.tab_nav').click(function(){
  $(this).addClass("active");
})

// =====================
// slider code (slick)

$('.single-item').slick({
    arrows:false,
    dots:true
  });

  $('.prev').click(function(){
  $('.single-item').slick('slickPrev');
  })

  $('.next').click(function(){
  $('.single-item').slick('slickNext');
  })

//navbar scrolling items

  $(".nav_scrl").click(function(){
      
     var href =  $(this).attr("href");
    var off =   $(href).offset().top - 100;
    
      $("html,body").animate({scrollTop:off},1500)
  })


//counter up section

$('.counter').counterUp({
  delay: 10,
  time: 2000
});


})

//End of code

