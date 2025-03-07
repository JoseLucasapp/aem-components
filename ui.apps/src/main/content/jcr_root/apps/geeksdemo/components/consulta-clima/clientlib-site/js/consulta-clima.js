const button = document.getElementById('cmp-consulta-clima_submit');

button.addEventListener('click', () => {
  const cidade = document.getElementById('cmp-consulta-clima_input').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}`;

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Basic YWRtaW46YWRtaW4='
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const temperatura = data.main.temp;
      const descricao = data.weather[0].description;
      document.getElementById('cmp-consulta-clima_resultado').value = `Temperatura: ${temperatura}K\nDescrição: ${descricao}`;
    });
});