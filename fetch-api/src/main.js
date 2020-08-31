const cep = document.querySelector('#cep')
const showData = (result) => {
  for (const campo in result) {//pra cada uma dos resultados, armazena o seu nome na variavel campo
    if (document.querySelector('#' + campo)) { //verificando se o id existe, se não existir, vai ser ignorado
      //preencher dinamicamente
      document.querySelector('#' + campo).value = result[campo]
      console.log(campo)
    }
  }
}

cep.addEventListener('blur', (event) => {
  let search = cep.value.replace('-', '');

  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
      response.json()//trazer a resposta no formato de json
        .then(data => showData(data))
    })
    .catch((err) => console.log('deu erro' + err.message))
  console.log(cep.value)
})