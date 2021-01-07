import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import styled from "@emotion/styled/";

import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ default_location }) => {
  // TODO: Hide API keys
  //const api_key = "bf746c8139c227d3504c054d39a6bdba";
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  console.log(API_KEY);

  // useState (imported from React) is a Hook for using React state
  // We pass the initial state as argument.
  // useState returns an array with two values:
  // a variable and a function to update that variable

  // query can be in form 'city' or 'city, country code'
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false); // No loading initially
  const [error, setError] = useState(false); // No errors initially

  // Passing useState an object to represent weather
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    celsius: null,
    condition: null,
  });

  // Async function that fetches weather info from OpenWeather API
  // Updates weather object via setWeather()
  const getWeather = async (query) => {
    setQuery(""); // Reset to empty string each time
    setLoading(true); // Begin loading
    try {
      // Async functions need to await for Promise to be settled
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${API_KEY}`
      );
      const responseJSON = await response.json(); // String of JSON data
      setWeather({
        city: responseJSON.name,
        country: responseJSON.sys.country,
        celsius: responseJSON.main.temp,
        condition: responseJSON.weather[0].main,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false); // End loading
  };

  // useEffect Hook from React takes in function and dependency array
  // Function argument will run once the component is mounted
  // It will re-run if/when any of its dependencies change
  // This particular bit of code initializes the weather card so its not blank
  useEffect(() => {
    getWeather(default_location);
  }, [default_location]);

  if (error) {
    return (
      <Error>
        Error: Couldn't find that city!
        <button onClick={() => setError(false)}>Reset</button>
      </Error>
    );
  }

  if (loading) {
    return (
      <Loader>
        <PulseLoader color="lightgray" />
      </Loader>
    );
  }

  return (
    <WeatherCard
      celsius={weather.celsius}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      getWeather={getWeather}
    />
  );
};

export default WeatherEngine;

const Error = styled.div`
  margin: 15px 15px;
  background: #525252;
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`;

const Loader = styled.div`
  margin: 15px 15px;
  display: flex;
  width: 200px;
  height: 240px;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`;
