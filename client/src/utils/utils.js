export default function calcAverageValue(arr) {
  let numberOfElements = arr.length
  let sumElements = 0
  for (let el of arr) {
    sumElements += el
  }

  return (sumElements / numberOfElements).toFixed(2)
}
