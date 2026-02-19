import axios from "axios";
import React, { useState } from "react";

export const ApiOmdb = () => {
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
    <div style={{ textAlign: "center", color: "skyblue" }}>
      <h1>OMDB search</h1>
      <label>Search : </label>{" "}
      <input
        type="text"
        onChange={(event) => {
          searchhandle(event);
        }}
      ></input>{" "}
      <button
        onClick={() => {
          getMovie();
        }}
        style={{
          background: "linear-gradient(45deg, #667eea, #764ba2)",
          color: "white",
          padding: "10px 25px",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "0.3s",
        }}
      >
        Search
      </button>
      <table className="table table-dark">
        <thead>
          <th>Title</th>
          <th>Year</th>
          <th>imdbID</th>
          <th>Type</th>
          <th>Poster</th>
        </thead>
        <tbody>
          {Movies.map((movie) => {
            return (
              <tr>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.imdbID}</td>
                <td>{movie.Type}</td>
                <td>
                  <img
                    src={movie.Poster}
                    style={{ height: "150px", width: "auto" }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
