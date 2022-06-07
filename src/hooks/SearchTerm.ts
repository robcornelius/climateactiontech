import { useContext } from "react";
import { SearchTermContext } from "../contexts/SearchTerm";

const useSearchTerm = () => {
  const context = useContext(SearchTermContext);
  if (context === undefined) {
    throw new Error("searchTerm must be used within an searchTermContext");
  }
  return context;
};
export default useSearchTerm;
