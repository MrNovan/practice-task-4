export default () => {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const confirmPassword = document.querySelector('#password-confirm');
  const birthDay = document.querySelector('#birth-day');
  const button = document.querySelector('#form-button');

  const firstNameError = document.querySelector('#first-name-error');
  const lastNameError = document.querySelector('#last-name-error');
  const emailError = document.querySelector('#email-error');
  const passwordError = document.querySelector('#password-error');
  const confirmPasswordError = document.querySelector('#password-confirm-error');
  const birthDayError = document.querySelector('#birth-day-error');

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
      firstNameError.textContent = '';
    } else {
      firstName.classList.remove('valid');
      firstName.classList.add('invalid');
      firstNameError.textContent = 'Имя пользователя должно содержать только буквы.';
    }
    checkFormValidity();
  });

  lastName.addEventListener('input', () => {
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (nameRegex.test(lastName.value)) {
      lastName.classList.remove('invalid');
      lastName.classList.add('valid');
      lastNameError.textContent = '';
    } else {
      lastName.classList.remove('valid');
      lastName.classList.add('invalid');
      lastNameError.textContent = 'Фамилия пользователя должно содержать только буквы.';
    }
    checkFormValidity();
  });

  emailInput.addEventListener('input', () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailRegex.test(emailInput.value)) {
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
      emailError.textContent = '';
    } else {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
      emailError.textContent = 'Введите валидный E-mail. Пример: test@test.ru';
    }
    checkFormValidity();
  });

  passwordInput.addEventListener('input', () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (passwordRegex.test(passwordInput.value)) {
      passwordInput.classList.remove('invalid');
      passwordInput.classList.add('valid');
      passwordError.textContent = '';
    } else {
      passwordInput.classList.remove('valid');
      passwordInput.classList.add('invalid');
      passwordError.textContent = 'Минимальная длина пароля 8 символов. Пароль должен содержать минимум одну цифру, по одной заглавной и строчную буквы и один символ.';
    }
    checkFormValidity();
  });

  confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === passwordInput.value) {
      confirmPassword.classList.remove('invalid');
      confirmPassword.classList.add('valid');
      confirmPasswordError.textContent = '';
    } else {
      confirmPassword.classList.remove('valid');
      confirmPassword.classList.add('invalid');
      confirmPasswordError.textContent = 'Пароли не совпадают.';
    }
    checkFormValidity();
  });

  birthDay.addEventListener('input', () => {
    const currentYear = new Date().getFullYear();
    const year = birthDay.value.substring(0, 4);
    const age = currentYear - year;

    if (age > 18 && age < 100) {
      birthDay.classList.remove('invalid');
      birthDay.classList.add('valid');
      birthDayError.textContent = '';
    } else {
      birthDay.classList.remove('valid');
      birthDay.classList.add('invalid');
      birthDayError.textContent = 'Возраст пользователя должен быть не младше 18 лет.';
    }
    checkFormValidity();
  });
};
