import React, { useEffect, useState } from 'react'
import axios from 'axios';


function WeatherPage() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState([]);

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0b226582f358d2abab508570b79f5db9`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=0b226582f358d2abab508570b79f5db9`;

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
        const currentWeatherResponse = await axios.get(currentWeatherUrl);
        const forecastResponse = await axios.get(forecastUrl);

        setData(currentWeatherResponse.data);
        setForecast(forecastResponse.data.list);

        console.log('Current Weather Data:', currentWeatherResponse.data);
        console.log('5-Day Forecast Data:', forecastResponse.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }

      setLocation('');
    }
  };
  return (
    <div className="app">
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
    <div className="container px-5">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        {data.name !== undefined && (
        <div className='bottom'>
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()}°C</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">{data.wind.speed.toFixed()} m/s</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
      )}
        
      </div>
  


<div className='forecast'>
  {forecast
    .filter((item, index, self) => {
      // Filter only the first entry for each day
      const currentDate = new Date(item.dt_txt).toLocaleDateString();
      const nextDate = index + 1 < self.length ? new Date(self[index + 1].dt_txt).toLocaleDateString() : null;
      return currentDate !== nextDate;
    })
    .map((item) => (
      <div key={item.dt}>
      <p>{new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</p>
      <p>{item.main?.temp.toFixed()}°C</p>
      <p>{item.weather?.[0]?.main}</p>
    </div>
    
    ))}
</div>
    </div>
  </div>
  )
}

export default WeatherPage