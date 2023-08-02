import React from "react";

const SinlgeImage = ({ ele }) => {
  return (
    <>
      <p>{ele.title}</p>
      <img src={ele.url} alt={ele.title} />
    </>
  );
};

export default SinlgeImage;
