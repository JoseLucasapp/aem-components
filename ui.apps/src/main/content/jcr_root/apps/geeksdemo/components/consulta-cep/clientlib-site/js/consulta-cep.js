const getButton = document.getElementById('cmp-consulta-cep_submit-get');
const postButton = document.getElementById('cmp-consulta-cep_submit-post');

getButton.addEventListener('click', () => {
  const cep = document.getElementById('cmp-consulta-cep_input').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const logradouro = data.logradouro;
      const bairro = data.bairro;
      const cidade = data.localidade;
      const estado = data.uf;
      document.getElementById('cmp-consulta-cep_resultado').value = `Logradouro: ${logradouro}\nBairro: ${bairro}\nCidade: ${cidade}\nEstado: ${estado}`;
    });
});

postButton.addEventListener('click', () => {
  const cep = document.getElementById('cmp-consulta-cep_input').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Basic YWRtaW46YWRtaW4='
    }
  })
    .then(response => response.json())
    .then(data => {
      const logradouro = data.logradouro;
      const bairro = data.bairro;
      const cidade = data.localidade;
      const estado = data.uf;
      document.getElementById('cmp-consulta-cep_resultado').value = `Logradouro: ${logradouro}\nBairro: ${bairro}\nCidade: ${cidade}\nEstado: ${estado}`;
    });
});