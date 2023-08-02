import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const length = 5;

  const slicedFiveImages = images.slice(0, length);
  //getting only first 5 elements inside the char dataset

  const handlePrevious = () => {
    const newIndex = (index - 1 + length) % length;
    setIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (index + 1) % length;
    setIndex(newIndex);
  };

  return (
    <>
      {/* <h1>Scroll</h1> */}
      <div className="carousel">
        {slicedFiveImages.map((ele, idx) => (
          <div
            key={ele.id}
            style={{ display: idx === index ? "block" : "none" }}
          >
            <img src={ele.url} alt={ele.title} />
          </div>
        ))}
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <p>Image number {index + 1}</p>
      </div>
    </>
  );
};

export default Carousel;
