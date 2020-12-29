import React, { useState } from "react";
import styled from "@emotion/styled/";

const Info = ({ celsius, condition }) => {
  const [useCelsius, setUseCelsius] = useState(true);
  let units = "°C";

  if (useCelsius) {
    return (
      <>
        <Temperature>
          {Math.round(celsius)}
          <Units
            onClick={(e) => {
              e.preventDefault();
              setUseCelsius(!useCelsius);
            }}
          >
            {units}
          </Units>
        </Temperature>

        <Condition>{condition}</Condition>
      </>
    );
  } else if (!useCelsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    units = "°F";

    return (
      <>
        <Temperature>
          {Math.round(fahrenheit)}
          <Units
            onClick={(e) => {
              e.preventDefault();
              setUseCelsius(!useCelsius);
            }}
          >
            {units}
          </Units>
        </Temperature>

        <Condition>{condition}</Condition>
      </>
    );
  }
};

export default Info;

const Temperature = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-size: 2rem;
  font-weight: 200;
`;

const Units = styled.span`
  cursor: pointer;
  :hover {
    top: -4px;
  }
`;

const Condition = styled.div`
  font-family: "Merriweather", sans-serif;
  font-size: 1.2rem;
`;
