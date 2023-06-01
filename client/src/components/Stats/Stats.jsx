import Stat from "./Stat";

const Stats = ({
  averageSize,
  averagePrice,
  averagePricePerSqMeter,
  modeSize,
  modePrice,
  modePricePerSqMeter,
  medianPrice,
  medianSize,
  medianPricePerSqMeters,
}) => {
  return (
    <div className="stats">
      <Stat
        value={"€ " + Number(averagePrice.toFixed(0)).toLocaleString()}
        label="Average Price"
        percentChange={4.5}
      />
      <Stat
        value={
          "€ " +
          Number(averagePricePerSqMeter.toFixed(0)).toLocaleString() +
          " m2"
        }
        label="Average Price Per Sq.m."
        percentChange={-4.5}
      />
      <Stat
        value={Math.round(averageSize) + " m2"}
        label="Average Size"
        percentChange={1}
      />
      <Stat
        value={"€ " + Number(modePrice.toFixed(0)).toLocaleString()}
        label="Mode Price"
        percentChange={1}
      />
      <Stat
        value={
          "€ " + Number(modePricePerSqMeter.toFixed(0)).toLocaleString() + " m2"
        }
        label="Mode Price Per Sq.m."
        percentChange={1}
      />
      <Stat value={modeSize + " m2"} label="Mode Size" percentChange={1} />
      <Stat
        value={"€ " + Number(medianPrice.toFixed(0)).toLocaleString()}
        label="Median Price"
        percentChange={1}
      />
      <Stat
        value={
          "€ " +
          Number(medianPricePerSqMeters.toFixed(0)).toLocaleString() +
          " m2"
        }
        label="Median Price Per Sq.m."
        percentChange={1}
      />
      <Stat value={medianSize + " m2"} label="Median Size" percentChange={1} />
    </div>
  );
};

export default Stats;
