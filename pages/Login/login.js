document.getElementById('btnEntrar').addEventListener('click', entrar);

function entrar(event) {
  event.preventDefault();

  const email = document.getElementById('txtEmail').value.trim();
  const senha = document.getElementById('txtSenha').value.trim();
  const messageError = document.getElementById('messageError');
  let usuarioCadastrado = localStorage.getItem('usuario');

  if (!usuarioCadastrado) {
    messageError.textContent = "Usuário ou senha inválidos!!!";
    messageError.style.color = "red";
    return;
  }

  usuarioCadastrado = JSON.parse(usuarioCadastrado);

  if (email === usuarioCadastrado.email && senha === usuarioCadastrado.senha) {
    window.location.href = "../../../index.html";
  } else {
    messageError.textContent = "Usuário ou senha inválidos!!!";
    messageError.style.color = "red";
  }
}
