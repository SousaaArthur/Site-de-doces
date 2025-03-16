function entrar(event){
  event.preventDefault(); 
  const email = document.getElementById('txtEmail').value.trim();
  const senha = document.getElementById('txtSenha').value.trim();

  let usuarioCadastrado = localStorage.getItem('usuario');

  if(!usuarioCadastrado){
    alert("Nem usuário cadastrado!!!");
    return;
  }

  usuarioCadastrado = JSON.parse(usuarioCadastrado);

  if(email === usuarioCadastrado.email && senha === usuarioCadastrado.senha){
    window.location.href = "../../../index.html";
  }

}

document.getElementById('btnEntrar').addEventListener('click', entrar);