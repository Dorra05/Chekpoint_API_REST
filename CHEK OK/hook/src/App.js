import "./App.css";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import MovieList from './components/MovieList';
import movies from './movies.js';
import Filter from './components/Filter.js';
import AddNewMovie from './components/AddNewMovie.js'



function App() {
  const[ourMovie,setOurMovie]=useState(movies)
  const[title, setTitle]=useState("")
  const[rating,setRating]=useState(0)
  const addingMovie=(newMovie)=>{
setOurMovie([...ourMovie,newMovie])
  }
  return (
    <>
  <MovieList ourMovie={ourMovie} title={title} rating={rating}/>
  <Filter setTitle={setTitle} setRating={setRating}/>
  <AddNewMovie addingMovie={addingMovie}/>
    </>
  );
}

export default App;
