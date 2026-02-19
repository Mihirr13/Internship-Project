import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/css/moviedetail.css";

export const MovieDetails = () => {
  const { id } = useParams();   // get imdbID from URL
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const movieDetail = async () => {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=ea497023&i=${id}`
      );
      setDetails(res.data);
    };

    movieDetail();
  }, [id]);

  return (
    <div className="detail">
      <h1>Movie Detail</h1>

      {details && (
        <div className="detail-card">
          <img src={details.Poster} alt={details.Title} />
          <h2>{details.Title}</h2>
          <p><b>Year:</b> {details.Year}</p>
          <p><b>Genre:</b> {details.Genre}</p>
          <p><b>Director:</b> {details.Director}</p>
          <p><b>Plot:</b> {details.Plot}</p>
        </div>
      )}
    </div>
  );
};
