import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSearchTerm from "../../hooks/SearchTerm";
/* 
    normally this would come from an endpoint and I converted the CSV to JSON and removed about half of the data for brevity
*/
import uniqueSectors from "../../uniqueSectors.json";
import allResults from "../../final.json";

type resultsType = {
  policy_id: number;
  policy_title: string;
  sectors: string[];
  description_text: string;
}

const PrettyTable = styled.table`
    border: 1px solid orange;
    & thead {
        & th {
            border-right: 1px solid orange;
            padding: 0 2px;
        }
    }
    & tbody td {
        border-top: 1px solid orange;
        border-right: 1px solid orange;
    }
`;

const Results = () => {
  const { searchTerm } = useSearchTerm();
  const [filteredResults, setFilteredResults] = useState<resultsType[]>();
  const results: resultsType[] = [];
  useEffect(() => {
    allResults.forEach(element => {
      if (element.sectors.includes(searchTerm)) {
        results.push(element);
      }
    });
    setFilteredResults(results);
  }, [searchTerm]);
  if (filteredResults !== undefined && filteredResults.length > 0) {
    return (
      <PrettyTable>
        <thead>
          <tr>
            <th style={{width: "200px"}}>Policy ID</th>
            {
              uniqueSectors.map(sector => {
                return (<th key={sector}>{sector}</th>);
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            filteredResults?.map(result => {
              return (
                <tr key={result.policy_id}>
                  <td style={{width: "200px"}}>{result.policy_id}</td>
                  {
                    uniqueSectors.map((sector, i) => {
                      if(result.sectors.indexOf(sector)) {
                        return (<td key={i}>✅</td>);
                      } else {
                        return (<td key={i}>❌</td>);
                      }
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </PrettyTable>
    );
  } else {
    return <></>;
  }
};

export default Results;