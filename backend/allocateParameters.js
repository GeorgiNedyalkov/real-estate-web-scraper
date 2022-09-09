// 73 000 EUR (1 303.34 EUR/кв.м)56 кв.мТухла2005 г.5 етажНепоследен

// Give the above string divide the different parts into separate object properties.

let str = "73 000 EUR (1 303.34 EUR/кв.м)56 кв.мТухла2005 г.5 етажНепоследен"

function divideString(s) {
  // Create the object
  let parameters = {}
  // select the price and remove unecessary strings
  const price = +s.slice(0, 6).replace(/\s/, "")

  // select the price per sq.m. - the text between paranthesis
  const regExp = /\(([^_]+)\)/
  const text = regExp.exec(s)[1]
  const pricePerSqueareMeter = +text
    .substring(0, text.length - 8)
    .replace(/\s/, "")

  //  trim the string up to the closing parenthesi
  let indexClosingParenthesis = 0

  for (let index in s) {
    if (s[index] === ")") {
      indexClosingParenthesis = index
      indexClosingParenthesis++
    }
  }

  const removedPrices = s.substring(indexClosingParenthesis, s.length)

  //  select the size
  const size = +removedPrices.substring(0, removedPrices.match(/\s/).index)

  // remove size
  const removedSize = removedPrices.substring(
    removedPrices.match(/.м/).index + 2,
    s.length
  )

  // select the construction type
  let constructionType = ""

  if (/Тухла/.test(s)) {
    constructionType = "Тухла"
  } else if (/Панел/.test(s)) {
    constructionType = "Панел"
  } else if (/ЕПК.ПК/.test(s)) {
    constructionType = "ЕПК/ПК"
  } else if (/Гредоред/.test(s)) {
    constructionType = "Гредоред"
  }

  // select the year built
  let yearBuilt = 0

  let yearAndFloor = []

  for (let char of removedSize) {
    let test = Number(char)

    if (isNaN(test)) {
      continue
    } else {
      yearAndFloor.push(char)
    }
  }

  let arr = yearAndFloor.join("").split(" ")

  let floor = +arr[1]
  let year = +arr[0]

  // bool - last or not
  let lastFloor = false

  let lastFloorRegEx = /Непоследен/i

  if (lastFloorRegEx.test(s)) {
    lastFloor = false
  }

  console.log(s)

  // create properties of object
  parameters.price = price
  parameters.pricePerSqueareMeter = pricePerSqueareMeter
  parameters.size = size
  parameters.constructionType = constructionType
  parameters.yearBuilt = year
  parameters.floor = floor
  parameters.lastFloor = lastFloor

  return parameters
}

// console.log(divideString(str))

//
// 74 000 EUR (1 121.21 EUR/кв.м)Двустаен апартамент в Изгрев66 кв.мПанел1992 г.7 етажПоследен етаж
// 73 000 EUR (1 303.34 EUR/кв.м)Двустаен апартамент в Изгрев56 кв.мТухла2005 г.5 етажНепоследен
// 67 530 EUR (1 007.91 EUR/кв.м)Двустаен апартамент в Изгрев67 кв.мТухла2022 г.8 етажНепоследенВ строеж
// 62 640 EUR (835.20 EUR/кв.м)Двустаен апартамент в Изгрев75 кв.мТухла2022 г.4 етажНепоследенВ строеж
// 67 590 EUR (834.44 EUR/кв.м)Двустаен апартамент в Изгрев81 кв.мТухла2022 г.3 етажНепоследенВ строеж
// 72 360 EUR (904.50 EUR/кв.м)Двустаен апартамент в Изгрев80 кв.мТухла2022 г.5 етажНепоследенВ строеж
// 53 000 EUR (917.27 EUR/кв.м)Двустаен апартамент в Изгрев57.78 кв.мТухла2 етаж
// 67 530 EUR (1 007.91 EUR/кв.м)Двустаен апартамент в Изгрев67 кв.мТухла2022 г.8 етажНепоследенВ строеж
// 68 000 EUR (1 003.99 EUR/кв.м)Двустаен апартамент в Изгрев68 кв.мТухла2022 г.5 етажНепоследенВ строеж

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

let testStr =
  "61 830 EUR (1 104.11 EUR/кв.м)Двустаен апартамент в Изгрев56 кв.мТухла2022 г.6 етажНепоследенВ строеж"

let testStr2 =
  "53 000 EUR (917.27 EUR/кв.м)Двустаен апартамент в Изгрев57.78 кв.мТухла2 етаж"
console.log(parseInput(testStr))
console.log(parseInput(testStr2))
