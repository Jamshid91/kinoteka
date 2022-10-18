const  menuBurger = document.querySelector('.menu-burger'),
       mobileMenu = document.querySelector('.mobile-menu'),
       mobileMenuClose = document.querySelector('.mobile-menu__close'),
       body = document.querySelector('body');



       menuBurger.addEventListener('click', () => {
        mobileMenu.classList.add('showMobileMenu');
        mobileMenuClose.classList.add('showCloseBtn');
        body.classList.add('showScroll');
        menuBurger.style.display= 'none'
    });
    
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('showMobileMenu');
      mobileMenuClose.classList.remove('showCloseBtn');
      body.classList.remove('showScroll');
      menuBurger.style.display= 'flex'
    });

    
  $('.menu-item').click(function() {
    $(this).siblings().removeClass('showMenuInfo');
    $(this).toggleClass('showMenuInfo');
  });