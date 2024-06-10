export default () => {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const confirmPassword = document.querySelector('#password-confirm');
  const birthDay = document.querySelector('#birth-day');
  const button = document.querySelector('#form-button');

  function checkFormValidity() {
    const inputs = [firstName, lastName, emailInput, passwordInput, confirmPassword, birthDay];
    const allValid = inputs.every((input) => input.classList.contains('valid'));
    button.disabled = !allValid;
  }

  firstName.addEventListener('input', () => {
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (nameRegex.test(firstName.value)) {
      firstName.classList.remove('invalid');
      firstName.classList.add('valid');
    } else {
      firstName.classList.remove('valid');
      firstName.classList.add('invalid');
    }
    checkFormValidity();
  });

  lastName.addEventListener('input', () => {
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (nameRegex.test(lastName.value)) {
      lastName.classList.remove('invalid');
      lastName.classList.add('valid');
    } else {
      lastName.classList.remove('valid');
      lastName.classList.add('invalid');
    }
    checkFormValidity();
  });

  emailInput.addEventListener('input', () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailRegex.test(emailInput.value)) {
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
    } else {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
    }
    checkFormValidity();
  });

  passwordInput.addEventListener('input', () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (passwordRegex.test(passwordInput.value)) {
      passwordInput.classList.remove('invalid');
      passwordInput.classList.add('valid');
    } else {
      passwordInput.classList.remove('valid');
      passwordInput.classList.add('invalid');
    }
    checkFormValidity();
  });

  confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === passwordInput.value) {
      confirmPassword.classList.remove('invalid');
      confirmPassword.classList.add('valid');
    } else {
      confirmPassword.classList.remove('valid');
      confirmPassword.classList.add('invalid');
    }
    checkFormValidity();
  });

  birthDay.addEventListener('input', () => {
    const currentYear = new Date().getFullYear();
    const year = birthDay.value.substring(0, 4);
    const age = currentYear - year;

    if (age > 18) {
      birthDay.classList.remove('invalid');
      birthDay.classList.add('valid');
    } else {
      birthDay.classList.remove('valid');
      birthDay.classList.add('invalid');
    }
    checkFormValidity();
  });
};
