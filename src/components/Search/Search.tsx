import React, { useRef } from "react";
import styled from "styled-components";
import useSearchTerm from "../../hooks/SearchTerm";

const StyledInput = styled.input`
    border: 1px solid orange;
    border-radius: 5px;
    margin: 0 20px;
    padding: 5px;
    width: 75%;
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

  const { setSearchTerm } = useSearchTerm();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchButtonHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    if (null !== inputRef.current) {
      setSearchTerm(inputRef.current.value);
    }
  };

  return (
    <>
      <StyledInput type="text" id="searchBox" ref={inputRef} placeholder="Search"/>
      <StyledButton onClick={searchButtonHandler}>GO!</StyledButton>
    </>
  );
};

export default Search;