import React, { createContext, useState, ReactNode } from "react";

type SearchTermProps = { children: ReactNode };

interface ISearchTermProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const SearchTermContext = createContext({} as ISearchTermProps);

const SearchTermProvider = ({ children }: SearchTermProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchTermContext.Provider>
  );
};
export default SearchTermProvider;