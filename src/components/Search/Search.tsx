import React from "react";
import styled from "styled-components";
import useSearchTerm from "../../hooks/SearchTerm";
import uniqueSectors from "../../uniqueSectors.json";
/* 
    normally this would come from an endpoint and I converted the CSV to JSON
*/
const StyledSelect = styled.select`
    border: 1px solid orange;
    border-radius: 5px;
    margin: 0 20px;
    padding: 5px;
    width: 75%;
`;

const Search = () => {

  const { setSearchTerm } = useSearchTerm();

  const searchHandler = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    ev.preventDefault();
    setSearchTerm(ev.currentTarget.value);
  };

  return (
    <>
      <StyledSelect id="searchBox" onChange={searchHandler} placeholder="Search">
        {
          uniqueSectors.map((sector) => {
            return (<option key={sector} value={sector}>{sector}</option>);
          })
        }
      </StyledSelect>
    </>
  );
};

export default Search;