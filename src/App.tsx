import React from "react";
import Search from "./components/Search/Search";
import SearchTermProvider from "./contexts/SearchTerm";

function App() {
  return (
    <SearchTermProvider>
      <div className="App">
        <header>
          <h1>Search policy documents</h1>
        </header>
        <div className="container">
          <section className="search">
            <header>
              <h2>Search</h2>
              <Search/>
            </header>
          </section>
          <section className="results">
            <header>
              <h2>Results</h2>
            </header>
          </section>
        </div>
      </div>
    </SearchTermProvider>
  );
}

export default App;
