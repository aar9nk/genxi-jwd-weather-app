// // lets make more html for our page!
const container = document.querySelector("#weather-container");
const button = document.querySelector('#go-button');
const input = document.querySelector('#city-input');


const getDataForCity = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d746361df4112d4a44339cc2fabd41b&units=metric`);
  const data = await response.json();
  const serverData = data;
  
  
  const cityName = serverData.name;
  const temp = serverData.main.temp;
  const cloudData = serverData.weather[0].main;
  
  function createHtml() {
    return `
    <h2 style='color: blue;'>${cityName}</h2>
    <p>Temp: ${temp}</p>
    <p>Clouds: ${cloudData}</p>
    `;
  }
  
  
  container.innerHTML = createHtml();
}



button.addEventListener('click', () => getDataForCity(input.value));



  