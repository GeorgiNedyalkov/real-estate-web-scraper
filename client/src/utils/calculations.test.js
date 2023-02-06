import { calcAverage, findMode, findMedian } from "./calculations";
import { mockApartments } from "../data/mockData";

const apartments = [
  {
    id: 1,
    title: "San Stefano 97A",
    price: 100000,
    size: 90.54,
    pricePerSqMeter: 850.75,
  },
  {
    id: 2,
    title: "Adam mickevich 7",
    price: 200000,
    size: 110,
    pricePerSqMeter: 930,
  },
  {
    id: 3,
    title: "San Stefano 97A",
    price: 300000,
    size: 130,
    pricePerSqMeter: 1000,
  },
  {
    id: 4,
    title: "San Stefano 97A",
    price: 400000,
    size: 96,
    pricePerSqMeter: 1200.42,
  },
  {
    id: 5,
    title: "San Stefano 97A",
    price: 500000,
    size: 87,
    pricePerSqMeter: 1030.01,
  },
];

it("calculates the average value from an array of objects", () => {
  const averagePrice = calcAverage("price", apartments);
  const averageSize = calcAverage("size", apartments);
  const averagePricePerSqMeter = calcAverage("pricePerSqMeter", apartments);
  expect(averagePrice).toBe(300000);
  expect(averageSize).toBeCloseTo(102.7, 1);
  expect(averagePricePerSqMeter).toBeCloseTo(1002.23, 1);
});

it("find the median from an array of objects", () => {});
