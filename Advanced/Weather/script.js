let input = document.querySelector("#box");
let btn = document.querySelector("button");
let temp = document.querySelector(".temp");
let location1 = document.querySelector(".location");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

let url;
let weatherData = null;  // Store the fetched data

// Event listener for input
input.addEventListener("input", (e) => {
    url = `https://api.weatherapi.com/v1/current.json?key=893159cd5694499c87955048251105&q=${e.target.value}&aqi=no`;

});

// Fetch data when the button is clicked
btn.addEventListener("click", async () => {
  try {
    let res = await fetch(url);
    let data = await res.json();

    // Store the weather data
    weatherData = data;

    // Display weather data
    location1.textContent = data.location.name;
    temp.textContent = `${data.current.temp_c}°C`;
  humidity.textContent = `Humidity: ${data.current.humidity}%`;
  wind.textContent = `Wind: ${data.current.wind_kph} km/h`;
    // Show the weather icon
    document.querySelector(".weather-icon").src = data.current.condition.icon;
    document.querySelector(".weather-card").style.display = "flex";
    document.querySelector(".chart-container").style.display = "flex";
  
    // Now call the function to update the chart
    updateChart(data.current.temp_c);  // Pass the temperature data

  } catch (err) {
    alert("City not found.");
  }
});
