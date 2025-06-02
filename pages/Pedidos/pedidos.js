const inputCep = document.getElementById('txtCEP');
const inputStreet = document.getElementById('txtStreet');
const inputNeighborhood = document.getElementById('txtNeighborhood');
const inputState = document.getElementById('txtState');
const inputCity = document.getElementById('txtCity');

const climateCity = document.getElementById('climateCity');
const maximumTemp = document.getElementById('maximumTemp');
const aboutClimate = document.getElementById('aboutClimate');

const floatingScreen = document.querySelector('.floating-screen');

inputCep.addEventListener('change', () => {
  const cepValue = inputCep.value;
  const apiKey = '78718238052d4708920231914251604';

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
        inputCity.value = dados.localidade || '';

        let city = dados.localidade;

        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`)
        .then(response => {
          if(!response.ok) {
            throw new Error('Erro ao fazer a requisição da Weather API');
          }
          return response.json();
        })
        .then(dados => {
          if (dados.erro){
            alert("Cidade não encontrada.");
            return
          }
      
          climateCity.innerHTML = dados.location.region;
          maximumTemp.innerHTML = dados.current.temp_c;
          aboutClimate.innerHTML = dados.current.condition.text;
      
          console.log(dados.current.temp_c);
          floatingScreen.classList.remove("hidden");
        })
        .catch(erro => {
          console.error('Erro:', erro)
        });
      })
      .catch(erro => {
        console.error('Deu erro:', erro);
      });
  } else {
    console.error('CEP não pode estar vazio');
  }
});

document.querySelector('.btn-close').addEventListener('click', () => {
  floatingScreen.classList.add("hidden");
})