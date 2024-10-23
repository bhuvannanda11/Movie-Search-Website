import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <div>
      <section className="search-section">
        <h2><span>S</span>earch Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg==="Incorrect IMDb ID." ? "":isError.msg}</p>
        </div>
      </section>
    </div>
  );
};

export default Search;
