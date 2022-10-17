const modal = document.querySelector('.modal'),
      donate = document.querySelectorAll('.donate .icon'),
      myVideo = document.querySelector('.my-video'),
      playBtns = document.querySelectorAll('.trailer-bg .play'),
      myVideoClose = document.querySelector('.my-video__close'),
      trailerName = document.querySelector('.trailer-item__name');



donate.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('showModal');
    })
});

playBtns.forEach(play => {
  play.addEventListener('click', () => {
    myVideo.style.display = 'block'
  })
});

myVideoClose.addEventListener('click', () => {
  myVideo.style.display = 'none'
})
      



$(document).ready(function() {
    $('.trailer').hide();
    $('.trailer:first-child').show();
    $('.trailer__btn').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.trailer').hide();
      $('.' + pageInfo).show();
    })
  });

  $('.wrapper-item-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    touchMove: false,
    centerMode: true,
    centerPadding: '0px',
        nextArrow: `<button class="slick-next">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>
                </button>`,
  
        prevArrow: `<button class="slick-prev">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg>
                    </button>`,
    
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
    ]
  });