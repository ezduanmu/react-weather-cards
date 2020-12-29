import React from "react";
import styled from "@emotion/styled/";

import WeatherEngine from "./components/WeatherEngine";
import Instructions from "./components/instructions";

function App() {
  return (
    <Main>
      <Instructions />
      <br />
      <CardContainer>
        <WeatherEngine default_location="hong kong, hk" />
        <WeatherEngine default_location="singapore, sg" />
        <WeatherEngine default_location="new york, us" />
        <WeatherEngine default_location="medford, us" />

        <WeatherEngine default_location="geneva, ch" />
      </CardContainer>
      <CardContainer>
        <WeatherEngine default_location="sydney, au" />
        <WeatherEngine default_location="chicago, us" />
        <WeatherEngine default_location="london" />
        <WeatherEngine default_location="taiwan" />
        <WeatherEngine default_location="shanghai" />
      </CardContainer>
    </Main>
  );
}

export default App;

const Main = styled.div`
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
