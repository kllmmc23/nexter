import React from "react";

const Photo = ({ num }) => {
  return (
    <figure className={`gallery__item gallery__item--${num}`}>
      <img
        src={`img/gal-${num}.jpeg`}
        alt={`Gallery img ${num}`}
        className="gallery__img"
      />
    </figure>
  );
};

export default Photo;
