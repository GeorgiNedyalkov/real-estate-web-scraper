import Stat from "./Stat";

const Stats = ({ averageSize, averagePrice, averagePricePerSqMeter }) => {
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
    </div>
  );
};

export default Stats;
