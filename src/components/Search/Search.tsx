import React from "react";
import styled from "styled-components";
import useSearchTerm from "../../hooks/SearchTerm";
/* 
    normally this would come from an endpoint and I converted the CSV to JSON
*/
import allResults from "../../final.json";

const StyledSelect = styled.select`
    border: 1px solid orange;
    border-radius: 5px;
    margin: 0 20px;
    padding: 5px;
    width: 75%;
`;

const Search = () => {

  const { setSearchTerm, setUniqueSectors } = useSearchTerm();

  const allSectors: string[] = [];

  allResults.forEach(element => {
    element.sectors.forEach(sector => {
      allSectors.push(sector);
    });    
  });
  const uniqueSectors = [...new Set(allSectors)];

  const searchHandler = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    ev.preventDefault();
    setUniqueSectors(uniqueSectors);
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