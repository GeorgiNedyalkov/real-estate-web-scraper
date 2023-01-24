import { calcAverage } from "./calculations";
import { mockApartments } from "../data/mockData";

test("calcAverage with key price", () => {
  expect(calcAverage(mockApartments, "price")).toBeGreaterThan(50000);
  expect(calcAverage(mockApartments, "price")).not.toBe(0);
  expect(calcAverage(mockApartments, "price")).toBeCloseTo(94840.58);
  expect(calcAverage(mockApartments, "size")).toBeCloseTo(103.538);
});
