import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="movie-section-2">
        {/* <div className="loading">Loading...</div> */}
        <div class="loader"></div>
      </div>
    );
  }

  return (
    <section>
      <div className="container grid grid-4-col">
        {movie.map((currMovie) => {
          const { imdbID, Title, Poster } = currMovie;
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <img src={Poster} alt="img" />
                  <h2>{Title}</h2>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
