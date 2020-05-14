$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidestoshow: 3,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    autoplayspeed: 2000
});

//catering carousel
$('.foodcarousel').slick({
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    mobileFirst: true,
    slidesToShow: 1,
    
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint:1000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
  });

