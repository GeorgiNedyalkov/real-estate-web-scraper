function parseInput(s) {
  let parameters = {}

  let numbers = []

  for (let char of s) {
    if (!isNaN(char) || char == ".") {
      numbers.push(char)
    }
  }

  let numbersArr = numbers
    .join("")
    .split(" ")
    .filter((element) => element.length > 0)

  parameters.price = +numbersArr[0].replace(/\s/, "")
  parameters.pricePerSqMeter = +numbersArr[1].replace(/\s/, "").slice(0, -1)
  parameters.size = +numbersArr[2]
  parameters.year = numbersArr[3]
  parameters.floor = numbersArr[4]

  return parameters
}

module.exports = parseInput
