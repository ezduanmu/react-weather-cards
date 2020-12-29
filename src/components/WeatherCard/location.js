import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled/";
import { motion } from "framer-motion";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  // inputMode is true when user is typing input
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");

  // Give focus to input field
  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  });

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <InputField
              ref={inputRef}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)}>
              Cancel
            </CancelButton>
          </FormElement>
        </motion.div>
        <City onClick={() => setInputMode(true)}>{city}</City>
        <Country>{country}</Country>
      </Container>
    );
  }

  if (!inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <CityHover onClick={() => setInputMode(true)}>{city}</CityHover>
          <Country>{country}</Country>
        </motion.div>
      </Container>
    );
  }
};

export default Location;

// Styled sub-components are outside of the main component to avoid
// too much re-rendering
const Container = styled.div`
  text-align: center;
`;

const FormElement = styled.form`
  margin: 15px auto;
  display: flex;
  position: relative;
  background: white;
  border-radius: 5px;
`;

const InputField = styled.input`
  background: transparent;
  border: none;
  padding: 5px;
  width: 120px;
  :focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  padding: 5px;
  background: lightgray;
  cursor: pointer;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const CancelButton = styled.button`
  position: absolute;
  background: white;
  opacity: 80%;
  border: none;
  cursor: pointer;
  top: -22px;
  height: 18px;
  border-radius: 5px;
`;

const CityHover = styled.div`
  margin: 0 0;
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
  position: relative;
  cursor: pointer;
  :hover {
    top: -4px;
  }
`;

const City = styled.div`
  margin: 0 0;
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
  position: relative;
`;

const Country = styled.div`
  margin-top: 5px;
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;
