import React from "react";

const Highlights = ({
  apartments,
  marketCap,
  averagePrice,
  averageSize,
  averagePricePerSqMeter,
}) => {
  return (
    <div className="highlights">
      <h1 className="title">
        Today's real estate listings prices in{" "}
        <b className="highlight">Burgas</b>.
      </h1>
      <p>
        Total market cap is <b className="highlight"> {marketCap}.</b>
        Number of one bed properties
        <b className="highlight"> {apartments.length} </b>
        The average price for one bed properties is{" "}
        <span className="highlight">€{averagePrice.toLocaleString()} </span>
        with an average size of{" "}
        <span className="highlight">{averageSize.toFixed(2)} sq.m.</span>
        resulting in an average price per sq.m. of{" "}
        <span className="highlight">
          {averagePricePerSqMeter.toLocaleString()} €/м2
        </span>
      </p>
    </div>
  );
};

export default Highlights;
