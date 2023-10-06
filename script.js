'use-strict';

const form = document.querySelector('.form');
const btn = document.querySelector('.btnSubmit');
const email = document.querySelector('.emailInput');

form.addEventListener('submit', function (e) {
	console.log('heloł');
	const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, 'gm');

	const isValidEmail = emailRegex.test(email);
	console.log(isValidEmail);
});
