export default function parseInput(str) {
  // store the information about the paramters of the apartments
  let parameters = {};

  // get all the number data: price, pricePerSqMeters, size, year, floor
  let numbers = [];
  for (let char of str) {
    if (!isNaN(char) || char == ".") {
      numbers.push(char);
    }
  }
  let numbersArr = numbers
    .join("")
    .split(" ")
    .filter((element) => element.length > 0);

  // get the construction type
  let constructionType = "";
  if (/Тухла/.test(str)) {
    constructionType = "Тухла";
  } else if (/Панел/.test(str)) {
    constructionType = "Панел";
  } else if (/ЕПК.ПК/.test(str)) {
    constructionType = "ЕПК/ПК";
  } else if (/Гредоред/.test(str)) {
    constructionType = "Гредоред";
  }

  // get the completion progress
  let completionProgress = "";
  if (/В проект/.test(str)) {
    completionProgress = "В проект";
  } else if (/В строеж/.test(str)) {
    completionProgress = "В строеж";
  } else {
    completionProgress = "готов или завършен";
  }

  // check to see if apartment is on last floor
  let lastFloor = false;
  if (/Последен/.test(str)) {
    lastFloor = true;
  } else if (/Непоследен/.test(str)) {
    lastFloor = false;
  }

  // check to see if apartment is on first floor
  if (/Първи жилищен/.test(str)) {
    parameters.firstFloor = true;
  }

  // numerical data
  parameters.price = +numbersArr[0].replace(/\s/, "");
  parameters.pricePerSqMeter = +numbersArr[1].replace(/\s/, "").slice(0, -1);
  parameters.size = +numbersArr[2];
  // parameters.year = +[...numbersArr[3]].slice(1, numbersArr[3].length).join("");
  parameters.floor = +numbersArr[4] * 10;

  // text data
  parameters.constructionType = constructionType;
  parameters.completionProgress = completionProgress;
  parameters.lastFloor = lastFloor;

  return parameters;
}

// console.log(
//   parseInput(
//     "Вид на имота: Многостаен апартамент в Изгрев103 кв.мПанел1985 г.8 етажПоследен етаж5 стаен апартамент в саниран блок в ж.к. Изгрев, до магазин Билла. Апартамента е без подобрения."
//   )
// )
// console.log(
//   parseInput(
//     "74 000 EUR (1 121.21 EUR/кв.м)Двустаен апартамент в Изгрев66 кв.мПанел1992 г.7 етажПоследен етаж"
//   )
// )ear

// console.log(
//   parseInput(
//     "62 640 EUR (835.20 EUR/кв.м)Двустаен апартамент в Изгрев75 кв.мТухла2022 г.4 етажНепоследенВ строеж"
//   )
// )

// console.log(
//   parseInput(
//     "72 360 EUR (904.50 EUR/кв.м)Двустаен апартамент в Изгрев80 кв.мТухла2022 г.5 етажНепоследенВ строеж"
//   )
// )

// 74 000 EUR (1 121.21 EUR/кв.м)Двустаен апартамент в Изгрев66 кв.мПанел1992 г.7 етажПоследен етаж
// 62 640 EUR (835.20 EUR/кв.м)Двустаен апартамент в Изгрев75 кв.мТухла2022 г.4 етажНепоследенВ строеж
// 67 590 EUR (834.44 EUR/кв.м)Двустаен апартамент в Изгрев81 кв.мТухла2022 г.3 етажНепоследенВ строеж
// 72 360 EUR (904.50 EUR/кв.м)Двустаен апартамент в Изгрев80 кв.мТухла2022 г.5 етажНепоследенВ строеж
