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

    return `${day} ${date} ${month} ${year}`
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
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">Temperature:{weather.main.temp}°F</div>
            <div className="weather">Condition: {weather.weather[0].main}</div>
            <div className="high">High: {weather.main.temp}°F</div>
            <div className="low">Low: {weather.main.temp}°F</div>
            <div className="feels">{weather.main.temp}°F</div>
            <div className="humidity">{weather.main.temp}°F</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}


export default App;
