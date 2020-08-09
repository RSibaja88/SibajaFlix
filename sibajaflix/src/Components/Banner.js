import React, { useState, useEffect } from "react";
import axios from "../helpers/axios";
import requests from "../helpers/requests";

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBanner(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(banner);

  return (
    <header>
      {/*background image*/}
      {/*title*/}
      {/*<div> 2 buttons </div>}*/}
      {/*description*/}
    </header>
  );
}

export default Banner;
