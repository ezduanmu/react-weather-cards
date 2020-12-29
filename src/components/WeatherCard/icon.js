import React from "react";
import styled from "@emotion/styled/";

const Icon = () => {
  const Icon = styled.img`
    width: 40%;
  `;

  return <Icon src="./imgs/cloud.png" alt="Weather Icon" />;
};

export default Icon;
