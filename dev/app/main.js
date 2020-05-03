import '../common/scss/main.scss';

// ds-modal
import dsModal from '../components/ds-modal/ds-modal';

// accordion
import { dsAccordion } from '../components/ds-accordion/ds-accordion-faq';

dsAccordion();

// polifils
require('./polyfills/polyfills');

// mobile menu
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

// вопросы ответы
if (document.querySelector('.modal-faq-open-button')) {
  const modalFaq = new dsModal({
    container: '.modal-faq',
    openButton: '.modal-faq-open-button',
    closeButton: '.modal-faq-close-button',
  });
  modalFaq.init();
}

// обратная связь
if (document.querySelector('.modal-feedback-open-button')) {
  const modalFaq = new dsModal({
    container: '.modal-feedback',
    openButton: '.modal-feedback-open-button',
    closeButton: '.modal-feedback-close-button',
  });
  document.modalFaq = modalFaq;
  document.modalFaq.init();
}

// success
const modalSuccess = new dsModal({
  container: '.modal-success',
  openButton: '.modal-success-open-button',
  closeButton: '.modal-success-close-button',
});
document.modalSuccess = modalSuccess;
document.modalSuccess.init();

// размер recapcha
$(document).ready(() => {
  const scale = (parseFloat($('body').css('font-size')) / 16) * 0.925;
  console.log(scale);
  document.querySelector('.g-recaptcha').style.transform = `scale(${scale})`;
  document.querySelector('.g-recaptcha').style.transformOrigin = '0 0';
});

// bootstrap select
if (document.querySelector('.form-feedback__select')) {
  $('.form-feedback__select').selectpicker();
}
