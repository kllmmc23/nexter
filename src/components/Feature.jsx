import React from 'react'

const Feature = ({icon,title}) => {
    return (
      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref={`img/sprite.svg#icon-${icon}`}></use>
        </svg>
        <h4 className="heading-4 heading-4--dark">{title}</h4>
        <p className="feature__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
    );
}

export default Feature;
