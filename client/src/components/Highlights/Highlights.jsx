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
        <b className="highlight">Burgas</b>
      </h1>
      <p>
        Total market cap is <b className="highlight"> € {marketCap}</b>{" "}
        consisting of a total of{" "}
        <b className="highlight"> {apartments.length}</b> with an the average
        price for one bed properties is being
        <b className="highlight"> € {averagePrice.toLocaleString()} </b>
        The average size of on bedroom properties is
        <b className="highlight"> {averageSize.toFixed(2)} sq.m.</b>, resulting
        in an average price per sq.m. of{" "}
        <b className="highlight">
          {averagePricePerSqMeter.toLocaleString()} €/м2
        </b>
      </p>
    </div>
  );
};

export default Highlights;
