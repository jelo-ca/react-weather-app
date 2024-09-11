import React from "react";
import Header from "./Components/Header";
import InputCity from "./Components/InputCity";
import { useState, useEffect } from "react";
import ShowWeather from "./Components/ShowWeather";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setCity(cityInput);
    console.log(city);
  }

  function handleChange(e) {
    setCityInput(e.target.value);
  }

  //weather api
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}`;
  //Fetch with API
  async function fetchData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.cod === "404") {
      setError(true);
    } else {
      setWeatherData(data);
    }
  }

  useEffect(() => {
    fetchData(URL);
  }, [URL]);

  return (
    <div>
      <Header />
      <InputCity
        city={cityInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {error ? <h3>No Data Found :( </h3> : <ShowWeather data={weatherData} />}
    </div>
  );
}

export default App;
