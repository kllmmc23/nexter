import React from 'react'

const Img = ({img,alt,picnum}) => {
    return (
        <img src={`img/${img}`} alt={alt} className={`story__img--${picnum}`} />
    );
}

export default Img;
