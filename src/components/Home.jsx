import React from "react";

const Home = ({ img, desc, country, room, area, money }) => {
  return (
    <div className="home">
      <img
        src={`img/house-${img}.jpeg`}
        alt={`House ${img}`}
        className="home__img"
      />
      <svg className="home__like">
        <use xlinkHref="img/sprite.svg#icon-heart-full" />
      </svg>
      <h5 className="home__name">{desc}</h5>

      <div className="home__location">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-map-pin" />
        </svg>
        <p>{country}</p>
      </div>

      <div className="home__rooms">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-profile-male" />
        </svg>
        <p>{room} rooms</p>
      </div>

      <div className="home__area">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-expand" />
        </svg>
        <p>
          {area} m<sup>2</sup>
        </p>
      </div>

      <div className="home__price">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-key" />
        </svg>
        <p>{money}</p>
      </div>

      <button className="btn home__button">Contact realtor</button>
    </div>
  );
};

export default Home;
