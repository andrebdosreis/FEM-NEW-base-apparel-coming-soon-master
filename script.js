const form = document.getElementById('FormValidator');
const email = document.getElementById('email');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let emailValue = email.value;
  const errorText = document.getElementById('error-text');
  const errorIcon = document.getElementById('error-icon');

  if (!validateEmail(emailValue)) {
    email.style.borderColor = 'var(--soft-red)';
    errorText.innerHTML = "Please, provide a valid e-mail.";
    errorIcon.style.display = 'block';

  } else {
    email.style.borderColor = 'var(--desatured-Red)';
    errorText.innerHTML = 'Cadastro realizado!';
    errorIcon.style.display = 'none';
  }
});



function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}