
    $('.all_slider_items').slick({
      slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
dots:true,
autoplay:true

   });

    $('.second_slider').slick({
      slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
dots:true

   });



// ---------------------------------Code for customizing slider dots----------------------------------


    // Shaking image with mouse direction
// ---------------------------Paralax effect by tracking mouse directions------------------------------------ 
// ---------------------------Paralax effect by tracking mouse directions------------------------------------ 
$(".cards ").hover(function() {
   var moveableImage = $("img:last-child", this);
   var moveableText = $("img:first-child", this);

   var rect = $(this)[0].getBoundingClientRect();
   var mouse = {
       x: 0,
       y: 0,
       moved: false
   };

   $(this).mousemove(function(e) {
       mouse.moved = true;
       mouse.x = e.clientX - rect.left;
       mouse.y = e.clientY - rect.top;
   });

   // Ticker event will be called on every frame
   TweenLite.ticker.addEventListener('tick', function() {
       if (mouse.moved) {
           parallaxIt(moveableText, -80);
           parallaxIt(moveableImage, -30);
       }
       mouse.moved = false;
   });

   function parallaxIt(target, movement) {
       TweenMax.to(target, 0.3, {
           x: (mouse.x - rect.width / 2) / rect.width * movement,
           y: (mouse.y - rect.height / 2) / rect.height * movement
       });
   }

   $(window).on('resize scroll', function() {
       rect = $(this)[0].getBoundingClientRect();
   })
});
// ---------------------------Paralax effect by tracking mouse directions ended------------------------------------

$(document).ready(function(){
   $('.all_slider_items').slick({
     slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
dots:true,

  });
});

$(document).ready(function(){
   $('.second_slider').slick({
     slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
dots:true

  });
});

$('.beautiful_work_elements').slick({
slidesToShow: 5,
slidesToScroll: 1,
arrows: true,
dots:true,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}
},
{
breakpoint: 350,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});

//Implementing navigation of slides using mouse scroll by Mhedi Hasan own plug in
const slider = $(".second_slider, .all_slider_items");
slider.on('wheel', (function(e) {
e.preventDefault();
if (e.originalEvent.deltaY < 0) {
$(this).slick('slickNext');
} else {
$(this).slick('slickPrev');
}
}));


//Code for isotops
$(".isotope_tabs ul li a").click(function(){

//code for activity
var cat_name =  $(this).attr('name');
if(cat_name == 'all'){
$(".design, .branding, .photo").fadeIn(500);
//   alert(cat_name);
$(".all_").attr('class', 'active');
$(".design_").attr('class', 'sd');
$(".branding_").attr('class', 'sd');
$(".photo_").attr('class', 'sd');
}
else if(cat_name == 'design'){
$(".branding, .photo").fadeOut(500);
$(".design").fadeIn(500);
$(".all_").attr('class', 'sd');
$(".design_").attr('class', 'active');
$(".branding_").attr('class', 'sd');
$(".photo_").attr('class', 'sd');
}
else if(cat_name == 'branding'){
$(".design, .photo").fadeOut(500);
$(".branding").fadeIn(500);
// alert(cat_name);
$(".all_").attr('class', 'ffg');
$(".design_").attr('class', 'ed');
$(".branding_").attr('class', 'active');
$(".photo_").attr('class', '');
}
else if(cat_name == 'photo'){
$(".design, .branding").fadeOut(500);
$(".photo").fadeIn(500);
// alert(cat_name);
$(".all_").attr('class', 'er');
$(".design_").attr('class', 'er');
$(".branding_").attr('class', 'er');
$(".photo_").attr('class', 'active');
}
})

$('.all_slider_items').on('init', function(event, slick){
var dots = $( '.all_slider_items .slick-dots li' );
//   console.log( 'Mehedi Hasan ' ); 
dots.each( function( k, v){
$(this).find( 'button' ).addClass( 'heading'+ k );
});
var items = slick.$slides;
items.each( function( k, v){
var text = $(this).find( 'h4' ).text();
$( '.heading' + k ).text(text);
});
});

$('.second_slider').on('init', function(event, slick){
var dots = $( '.second_slider .slick-dots li' );
//   console.log( 'Mehedi Hasan ' ); 
dots.each( function( k, v){
$(this).find( 'button' ).addClass( 'heading'+ k );
});
var items = slick.$slides;
items.each( function( k, v){
var text = $(this).find( 'h4' ).text();
$( '.heading' + k ).text(text);
});
});

$('.beautiful_work_elements').on('init', function(event, slick){
var dots = $( '.beautiful_work_elements .slick-dots li' );
//   console.log( 'Mehedi Hasan ' ); 
dots.each( function( k, v){
$(this).find( 'button' ).addClass( 'heading'+ k );
});
var items = slick.$slides;
items.each( function( k, v){
var text = $(this).find( 'h4' ).text();
$( '.heading' + k ).text(text);
});
});




     