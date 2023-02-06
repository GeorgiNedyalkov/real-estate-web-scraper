import React from "react";

const Title = ({ city }) => {
  return (
    <h1 className="title" role="contentinfo">
      Today's real estate listings prices in
      <b className="highlight"> {city}</b>.
    </h1>
  );
};

export default Title;
