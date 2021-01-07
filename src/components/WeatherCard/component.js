import React, { useState } from "react";
import styled from "@emotion/styled/";
import { motion } from "framer-motion";

import Location from "./location";
import Info from "./info";

const WeatherCard = ({ celsius, condition, city, country, getWeather }) => {
  const getGradient = (celsius) => {
    let highColor = null;
    let lowColor = null;

    if (celsius > 15) {
      // "Hot" weather
      let topGreen = (1 - (celsius - 15) / 25) * 255;
      let botGreen = topGreen / 2;

      highColor = `rgb(255, ${topGreen}, 0)`;
      lowColor = `rgb(255, ${botGreen}, 0)`;
    } else if (celsius <= 14) {
      // "Cold" weather
      let topGreen = (1 - (celsius + 20) / 35) * 255;
      let botGreen = topGreen / 2;

      highColor = `rgb(0, ${topGreen}, 255)`;
      lowColor = `rgb(0, ${botGreen}, 255)`;
    }
    return [highColor, lowColor];
  };

  const Card = styled.div`
    margin: 15px 15px;
    background: linear-gradient(
      20deg,
      ${getGradient(celsius)[0]},
      ${getGradient(celsius)[1]}
    );
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location city={city} country={country} getWeather={getWeather} />
        <Info celsius={celsius} condition={condition} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
