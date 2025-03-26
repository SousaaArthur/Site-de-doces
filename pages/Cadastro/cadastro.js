document.getElementById('btnCadastrar').addEventListener('click', cadastrar);

function cadastrar(event) {
  event.preventDefault();

  let nome = document.getElementById("txtName").value.trim();
  let email = document.getElementById("txtEmail").value.trim();
  let senha = document.getElementById("txtSenha").value;
  let confirmarSenha = document.getElementById("txtConfirmarSenha").value;
  let messageError = document.getElementById("messageError");

  let isFormValid = validations(nome, email, senha, confirmarSenha, messageError);
  
  if (!isFormValid) return;  // Se tiver erro, para aqui

  nextPage(senha, email);
}

function validations(nome, email, senha, confirmarSenha, messageError) {
  let errorText = "";

  if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
    errorText = "Preencha todos os campos!!!";
  } else if (senha !== confirmarSenha) {
    errorText = "As senhas não coincidem!!!";
  } else if (senha.length < 6) {
    errorText = "A senha deve ter pelo menos 6 caracteres.";
  }

  messageError.textContent = errorText;
  messageError.style.color = "red";

  return errorText.length === 0;  // Retorna true se estiver tudo certo
}

function nextPage(senha, email) {
  const usuario = { senha, email };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  window.location.href = "../Login/login.html";
}