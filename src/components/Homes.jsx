import React from "react";
import Home from "./Home";

const Homes = () => {
  return (
    <div className="homes">
      <Home
        img="1"
        desc="Beautiful Family House"
        country="USA"
        room='5'
        area='325'
        money='$1,200,000'
      />
      <Home
        img="2"
      
        desc="Modern Glass Villa"
        country="Canada"
        room='6'
        area='450'
        money='$2,750,000'
      />
      <Home
        img="3"
       
        desc="Cozy country house"
        country="UK"
        room='4'
        area='250'
        money='$850,000'
      />
      <Home
        img="4"
       
        desc="Large Rustical villa"
        country="Portugal"
        room='6'
        area='325'
        money='$1,950,000'
      />
      <Home
        img="5"
       
        desc="Majestic Palace House"
        country="Germany"
        room='18'
        area='4000'
        money='$9,500,000'
      />
      <Home
        img="6"
       
        desc="Moderm Family Apartment"
        country="Italy"
        room='3'
        area='180'
        money='$600,000'
      />
      
    </div>
  );
};

export default Homes;
