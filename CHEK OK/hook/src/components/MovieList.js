// import React from "react"
// import MovieCard from "./MovieCard";


// function MovieList({ourMovie,title, rating}) {
    
//     return (
//       <>
//       <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center', width:'20'}}>
//       {ourMovie.filter(moviee=>moviee.title.toUpperCase().includes(title.toUpperCase())).filter(moviee=>moviee.rating>=rating).map(moviee =><MovieCard {...moviee}/>)}
//      </div>
//       </>
//     );
//   }

import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ ourMovies, title, rating }) => {
  return (
    <div className="movie-list">
      {ourMovies
        .filter((movie) =>
          movie.title.toUpperCase().includes(title.toUpperCase())
        )
        .filter((movie) => movie.rating >= rating)
        .map((movie) => (
          <MovieCard {...movie} />
        ))}
    </div>
  );
};
export default MovieList;