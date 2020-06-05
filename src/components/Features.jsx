import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="features">
      <Feature icon="global" title="World's best luxury homes" />
      <Feature icon="trophy" title="Only the best properties" />
      <Feature icon="map-pin" title="All home sin in top locations" />
      <Feature icon="key" title="New home in 1 week" />
      <Feature icon="presentation" title="Top 1% realtors" />
      <Feature icon="lock" title="Secure payments on nexter" />
    </div>
  );
};

export default Features;
