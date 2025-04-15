const inputCep = document.getElementById('txtCEP');
const inputStreet = document.getElementById('txtStreet');
const inputNeighborhood = document.getElementById('txtNeighborhood');
const inputState = document.getElementById('txtState');

inputCep.addEventListener('change', () => {
  const cepValue = inputCep.value;

  if (cepValue) {
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao fazer a requisição');
        }
        return response.json();
      })
      .then(dados => {
        if (dados.erro){
          alert("CEP não encontrado.");
          return;
        }

        inputStreet.value = dados.logradouro || '';
        inputNeighborhood.value = dados.bairro || '';
        inputState.value = dados.estado || '';

      })
      .catch(erro => {
        console.error('Deu erro:', erro);
      });
  } else {
    console.error('CEP não pode estar vazio');
  }
});