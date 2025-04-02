import React, { useState }  from "react";
import MovieList from "./MovieList";
import movies from "../movies";
import Filter from "./Filter";
import AddNewMovie from "./AddNewMovie";

const Home = () =>{
const [ourMovies, SetOurMovies] = useState(movies);
const [title, setTitle] = useState("");
const [rating, setRating] = useState(0);

const addmovie = (newmovie) =>{
 SetOurMovies([...ourMovies,newmovie]);
}


return (
  <>
  <div className="app">
    <MovieList ourMovies={ourMovies} title={title} rating={rating} />
    <br></br>
    <h4 className="film">Your Film</h4>
    <Filter setTitle={setTitle} setRating={setRating} />

    <AddNewMovie addmovie={addmovie} />
    </div>
  </>
)
};
export default Home ;