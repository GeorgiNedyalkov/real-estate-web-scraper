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
      <Stat value={modePrice + " m2"} label="Mode Price" percentChange={1} />
      <Stat
        value={modePricePerSqMeter + " m2"}
        label="Mode Price Per Sq.m."
        percentChange={1}
      />
      <Stat value={modeSize + " m2"} label="Mode Size" percentChange={1} />
      <Stat
        value={medianPrice + " m2"}
        label="Median Price"
        percentChange={1}
      />
      <Stat
        value={medianPricePerSqMeters + " m2"}
        label="Median Price Per Sq.m."
        percentChange={1}
      />
      <Stat value={medianSize + " m2"} label="Median Size" percentChange={1} />
    </div>
  );
};

export default Stats;
