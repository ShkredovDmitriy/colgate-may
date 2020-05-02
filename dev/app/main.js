import '../common/scss/main.scss';

require('./polyfills/polyfills');

if (document.querySelector('.main-header__sandwich')) {
  //
  $('.main-header__sandwich').click(() => {
    $('.main-header__sandwich').toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $('body').toggleClass('overflov-hidden');
  });

  //
  $('.nav-menu__link').click(() => {
    $('.main-header__sandwich').removeClass('active');
    $('.nav-menu').removeClass('active');
    $('body').removeClass('overflov-hidden');
  });

  //
  $('.nav-menu__social-link').click(() => {
    $('.main-header__sandwich').removeClass('active');
    $('.nav-menu').removeClass('active');
    $('body').removeClass('overflov-hidden');
  });
}
