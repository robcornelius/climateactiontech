import React, { createContext, useState, ReactNode } from "react";

type SearchTermProps = { children: ReactNode };

interface ISearchTermProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  uniqueSectors: string[];
  setUniqueSectors: (value: string[]) => void;
}

export const SearchTermContext = createContext({} as ISearchTermProps);

const SearchTermProvider = ({ children }: SearchTermProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [uniqueSectors, setUniqueSectors] = useState<string[]>([]);
  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm, uniqueSectors, setUniqueSectors }}>
      {children}
    </SearchTermContext.Provider>
  );
};
export default SearchTermProvider;