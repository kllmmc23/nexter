import React from "react";

const Story = ({column ,name}) => {
  return <div className={`story__${column}`}>STORY {name}</div>;
};
export default Story;
// {/* <div className="story__content">STORY CONTENT</div> */}
