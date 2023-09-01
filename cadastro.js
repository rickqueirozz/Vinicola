const formularioLogin = document.getElementById('formulario_login');
const formularioCadastro = document.getElementById('formulario_cadastro');
const linkLogin = document.getElementById('link_login');
const linkCadastro = document.getElementById('link_cadastro');

linkLogin.addEventListener('click', (event) => {
  event.preventDefault();
  formularioCadastro.style.display = 'none';
  formularioLogin.style.display = 'block';

  setTimeout(() => {
    formularioCadastro.style.opacity = 0;
    formularioLogin.style.opacity = 1;
  }, 10);
});

linkCadastro.addEventListener('click', (event) => {
  event.preventDefault();
  formularioLogin.style.display = 'none';
  formularioCadastro.style.display = 'block';

  setTimeout(() => {
    formularioLogin.style.opacity = 0;
    formularioCadastro.style.opacity = 1;
  }, 10);
});