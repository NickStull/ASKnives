import "./Banner.css";
import { useState, useEffect } from "react";
// import axios from "axios";
// import requests from "../../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    // async function fetchData() {
    //   const request = await axios.get(requests.fetchNetflixOriginals);
    //   setMovie(
    //     request.data.results[
    //       Math.floor(Math.random() * request.data.results.length)
    //     ]
    //   );
    //   return request;
    // }
    // fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("./bannerimg.jpeg")`,
        backgroundPosition: "50% 10%",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          Aaron Sybrant Knives
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">Custom Knives</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
