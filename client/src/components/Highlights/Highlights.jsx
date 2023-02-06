import React from "react";

export const Highlights = ({
  marketCap,
  count,
  averagePrice,
  averageSize,
  averagePricePerSqMeter,
}) => {
  return (
    <div className="highlights">
      <p>
        Total market cap is
        <b className="highlight"> €{marketCap} </b>
        Number of one bed properties
        <b className="highlight">{count.length} </b>
        The average price for one bed properties is
        <span className="highlight">€{averagePrice.toLocaleString()}</span>
        with an average size of
        <span className="highlight">{averageSize.toFixed(2)} sq.m.</span>
        resulting in an average price per sq.m. of
        <span className="highlight">
          {averagePricePerSqMeter.toLocaleString()} €/м2
        </span>
      </p>
    </div>
  );
};
