import "./styles.css";
import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";

export default function App() {
  const [images, setImages] = useState([]);

  const api = "https://jsonplaceholder.typicode.com/albums/1/photos";

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data));
  };

  useEffect(() => {
    fetchData(api);
  }, [api]);

  return (
    <div className="carousel">
      <h1>Scroll below:</h1>
      <Carousel images={images} />
    </div>
  );
}
