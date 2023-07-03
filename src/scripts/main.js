'use strict';

const form = document.querySelector('form');
const buttons = document.querySelectorAll('.materials__btn');

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('page__body--with-menu')
    : document.body.classList.remove('page__body--with-menu');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('materials__btn--active');

    buttons.forEach(btn => {
      if (btn !== button) {
        btn.classList.remove('materials__btn--active');
      }
    });
  });
});
