import { calcAverage, findMode, findMedian } from "./calculations";
import { mockApartments } from "../data/mockData";

test("calcAverage with key price", () => {
  expect(calcAverage(mockApartments, "price")).toBeGreaterThan(50000);
  expect(calcAverage(mockApartments, "price")).not.toBe(0);
});
