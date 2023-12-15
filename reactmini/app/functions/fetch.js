const apiKey = 'b4d924aaf04a5e28ee07079a1e369647';
const city = 'London'; // Replace with the desired city

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the weather data here
    console.log(data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error fetching weather data:', error);
  });