import React, { useState, useEffect } from "react";
import axios from "../helpers/axios";
import requests from "../helpers/requests";
import netlfix from "../img/netflixLogo.png";
import "./Banner.css";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("${baseUrl}${movie?.backdrop_path}")`,
      }}
    >
      <div className="bannerContents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h2 className="bannerDescription">{truncate(movie?.overview, 250)}</h2>
      </div>
      <div className="fadeBottom" />
    </header>
  );
}

export default Banner;
