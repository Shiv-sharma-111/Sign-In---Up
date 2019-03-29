const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIp');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signIpButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});
