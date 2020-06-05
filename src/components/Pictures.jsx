import React from "react";
import Img from "./Img";

const Pictures = () => {
  return (
    <div className="story__pictures">
      <Img img='story-1.jpeg' alt='Couple with new house' picnum='1'/>
      <Img img='story-2.jpeg' alt='New house' picnum='2'/>
    </div>
  );
};

export default Pictures;
