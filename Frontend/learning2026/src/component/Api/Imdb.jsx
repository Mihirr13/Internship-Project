import axios from "axios";
import React, { useState } from "react";
import "../../assets/css/imdb.css";
import { Link } from "react-router-dom";

export const Imdb = () => {
  const [Movies, setMovies] = useState([]);
  const [search, setsearch] = useState("");

  const getMovie = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=ea497023&s=${search}`,
    );
    console.log(res);
    console.log(res.data);
    setMovies(res.data.Search || []);
  };
  const searchhandle = (event) => {
    setsearch(event.target.value);
  };
  return (
    <div>
        <div className="search-container">    
        <h1 style={{color:"yellow"}}>IMDB</h1>
      <label style={{color:"yellow"}}>Search : </label>{" "}
      <input
        type="text" className="search-input"
        onChange={(event) => {
          searchhandle(event);
        }}
      ></input>{" "}
      <button className="glass-btn"
        onClick={() => {
          getMovie();
        }}
      >
        Search
      </button>
      </div>
 

      <div className="movie-grid">
        {
            Movies.map((movie) => {
              return <div className="movie-card">
                <img src={movie.Poster} alt={movie.Title}/>
                <h3>{movie.Title}</h3>
                <h4>{movie.Year}</h4>
                <h4>{movie.Type}</h4>
              <Link to={`/movied/${movie.imdbID}`}>  <h4>{movie.imdbID}</h4></Link>
              </div>
            })
        }
      </div>
    </div>
  );
};
