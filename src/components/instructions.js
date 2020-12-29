import React from "react";
import styled from "@emotion/styled/";

const Instructions = () => {
  return (
    <InstructionPanel>
      Click a city name to search for a new city! <br />
      Click the temperature units to switch between celsius and fahrenheit!
    </InstructionPanel>
  );
};

export default Instructions;

const InstructionPanel = styled.div`
  color: white;
  font-family: sans-serif;
  font-size: 1.6rem;
  text-align: center;
`;
