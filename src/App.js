import React, { useState } from 'react';
const api = {
  key: "856cf893bf4748da5e5e119d50885a54",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [zipCode, setZipCode] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?zip=${zipCode},us&units=imperial&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setZipCode('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    return `${day}, ${month} ${date}, ${year} ${time}`
  }

  const dateBuilder2 = (d) => {
    let unix_timestamp = 1549312452
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes.substring(-2) + ':' + seconds.substring(-2);
    return formattedTime;
  }

  return (
    <div>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search Weather By Zip Code..."
            onChange={e => setZipCode(e.target.value)}
            value={zipCode}
            onKeyPress={search}
          />
        </div>
{/* because we put */}
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">Temperature: {weather.main.temp}??F</div>
            <div className="high">High: {weather.main.temp_max}??F</div>
            <div className="low">Low: {weather.main.temp_min}??F</div>
            <div className="feels"> Feels Like: {weather.main.feels_like}??F</div>
            <div className="humidity">Humidity: {weather.main.humidity}%</div>
            <div className="weather">Conditions: {weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}



export default App;

