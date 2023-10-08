'use-strict';

const form = document.querySelector('.form');
const btn = document.querySelector('.btnSubmit');
const email = document.querySelector('.emailInput');
const emailError = document.querySelector('.emailError');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    'gm'
  );

  const isValidEmail = emailRegex.test(email.value);

  isValidEmail
    ? emailError.classList.add('hidden')
    : emailError.classList.remove('hidden');
});
