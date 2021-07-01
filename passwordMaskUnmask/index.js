let visible = false;
const eyeIcon = document.querySelector('.js-eye');
const eyeOffIcon = document.querySelector('.js-eye-off');
const passwordField = document.querySelector('.js-password');
const visibilityToggle = document.querySelector(
  '.js-password-visibility-toggle'
);

visibilityToggle.addEventListener('click', togglePasswordMask);

function togglePasswordMask() {
  visible = !visible;
  togglePasswordType(visible);
  toggleEyeIcons(visible);
}

function togglePasswordType(visible) {
  const passwordType = visible ? 'text' : 'password';
  passwordField.type = passwordType;
}

function toggleEyeIcons(visible) {
  eyeOffIcon.classList.toggle('hidden', !visible);
  eyeIcon.classList.toggle('hidden', visible);
}
