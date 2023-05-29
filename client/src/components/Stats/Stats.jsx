import Stat from "./Stat";

const Stats = ({
<<<<<<< HEAD
  averageSize,
  averagePrice,
  averagePricePerSqMeter,
  modeSize,
  modePrice,
  modePricePerSqMeter,
=======
  modePricePerSqMeter,
  medianPrice,
  medianSize,
  averageSize,
  averagePrice,
  averagePricePerSqMeter,
>>>>>>> 51f49fb658eb1fb69a6dd45104121aeded8b4ac8
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
<<<<<<< HEAD
      <Stat value={modePrice + " m2"} label="Mode Price" percentChange={1} />
      <Stat
        value={modePricePerSqMeter + " m2"}
        label="Mode Price Per Sq.m."
        percentChange={1}
      />
      <Stat value={modeSize + " m2"} label="Mode Size" percentChange={1} />
=======
      <Stat
        value={modePricePerSqMeter + " m2"}
        label="Mode"
        percentChange={1}
      />
>>>>>>> 51f49fb658eb1fb69a6dd45104121aeded8b4ac8
    </div>
  );
};

export default Stats;
