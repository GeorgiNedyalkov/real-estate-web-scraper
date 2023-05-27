import Stat from "./Stat";

const Stats = ({
  modePricePerSqMeter,
  medianPrice,
  medianSize,
  averageSize,
  averagePrice,
  averagePricePerSqMeter,
}) => {
  return (
    <div className="stats">
      <Stat value={averagePrice} label="Average Price" percentChange={4.5} />
      <Stat
        value={averagePricePerSqMeter}
        label="Average Price Per Sq.m."
        percentChange={-4.5}
      />
      <Stat
        value={averageSize.toFixed(2) + " m2"}
        label="Average Size"
        percentChange={1}
      />
      <Stat
        value={modePricePerSqMeter + " m2"}
        label="Mode"
        percentChange={1}
      />
    </div>
  );
};

export default Stats;
