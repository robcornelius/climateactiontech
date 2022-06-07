import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    border: 1px solid orange;
    border-radius: 5px;
    margin: 0 20px;
    padding: 5px;
`;

const StyledButton = styled.button`
    background: orange;
    colour: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 7px;
    color: white;
`;

const Search = () => {

  return (
    <>
      <StyledInput/>
      <StyledButton>GO!</StyledButton>
    </>
  );
};

export default Search;