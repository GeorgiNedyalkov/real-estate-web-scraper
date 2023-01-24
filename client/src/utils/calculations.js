import { mockApartments } from "../data/mockData.js";

export function calcAverage(objArr, key) {
  const total = objArr.reduce((prev, next) => prev + next[key], 0);
  return total / objArr.length;
}

console.log(calcAverage(mockApartments, ["size"]));
console.log(calcAverage(mockApartments, ["price"]));
