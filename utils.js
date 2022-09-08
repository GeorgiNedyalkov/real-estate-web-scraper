function calculateAverageValue(arr) {
  let numberOfElements = arr.length

  let sumElements = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  })

  return sumElements / numberOfElements
}

module.exports = calculateAverageValue
