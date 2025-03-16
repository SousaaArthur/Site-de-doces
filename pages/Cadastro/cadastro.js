function cadastrar(event){
  event.preventDefault();

  let nome = document.getElementById("txtName").value.trim(); 
  let email = document.getElementById("txtEmail").value.trim();
  let senha = document.getElementById("txtSenha").value;
  let confirmarSenha = document.getElementById("txtConfirmarSenha").value;

  if(nome === ""){
    alert("Insira o seu nome!!!");
    return;
  } else if(email === ""){
    alert("Insira o email!!!");
    return;
  } else if(senha === ""){
    alert("Insira sua senha!!!");
    return;
  } else if(confirmarSenha === ""){
    alert("Confirme sua senha!!!");
    return;
  }

  if(senha !== confirmarSenha){
    alert("Senhas diferentes!!");
    return;
  }

  const usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert(
    "Usuário cadastrado: \n\n"+
    "Nome: " + usuario.nome + 
    "\nEmail: " + usuario.email +
    "\nSenha: " + usuario.senha  
  );
  
  window.location.href = "../Login/login.html";
}

document.getElementById('btnCadastrar').addEventListener('click', cadastrar)