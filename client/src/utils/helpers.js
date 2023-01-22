export const mockApartments = [
  {
    id: 1,
    completionProgress: "construction",
    constructionType: "brick",
    floor: 7,
    price: 108630,
    pricerPerSqMeter: 897.77,
    size: 121,
    title: "Тристаен апартамент в ж.к. Изгрев",
  },
  {
    id: 2,
    completionProgress: "project",
    constructionType: "brick",
    floor: 1,
    price: 121322,
    pricerPerSqMeter: 1155.45,
    size: 105,
    title: "Тристаен апартамент с югоизточно изложение и частен двор",
  },
  {
    id: 3,
    completionProgress: "construction",
    constructionType: "brick",
    floor: 3,
    price: 92000,
    pricerPerSqMeter: 851.85,
    size: 108,
    title: "АКЦИЯ!!! Тристаен апартамент 850 евро/кв.м!",
  },
  {
    id: 4,
    completionProgress: "project",
    constructionType: "brick",
    floor: 4,
    price: 83000,
    pricerPerSqMeter: 954.02,
    size: 87,
    title: "Тристаен апартамент в Изгрев",
  },
  {
    id: 5,
    completionProgress: "construction",
    constructionType: "brick",
    floor: 1,
    price: 103900,
    pricerPerSqMeter: 1008.74,
    size: 103,
    title: "Тристаен апартамент в Арена Изгрев, с Акт 14 - 103 900 Евро",
  },
  {
    id: 6,
    completionProgress: "construction",
    constructionType: "brick",
    floor: 1,
    price: 115000,
    pricerPerSqMeter: 1385.54,
    size: 83,
    title:
      "Ново! Предлагаме тристаен апартамент, разположен в ж.к. Изгрев. С гледка море! Изгрев, Бургас",
  },
  {
    id: 7,
    completionProgress: "construction",
    constructionType: "brick",
    floor: 9,
    price: 100000,
    pricerPerSqMeter: 1098.9,
    size: 91,
    title: "Топ апартамент в Арена Изгрев - 100 000 ЕвроИзгрев, Бургас",
  },
  {
    id: 8,
    completionProgress: "construction",
    constructionType: "brick",
    floor: 1.1,
    price: 993000,
    pricerPerSqMeter: 1034.38,
    size: 96,
    title: "Тристаен апартамент в Арена Изгрев - 99 300 ЕвроИзгрев, Бургас",
  },
  {
    id: 9,
    completionProgress: "project",
    constructionType: "brick",
    floor: 2,
    price: 91235,
    pricerPerSqMeter: 852.67,
    size: 107,
    title:
      "Тристаен апартамент в Луксозен комплекс в кв. ”Изгрев”! ДИРЕКТНО ОТ СТРОИТЕЛ!Изгрев, Бургас",
  },
  {
    id: 10,
    completionProgress: "construction",
    constructionType: "brick",
    floor: 5,
    price: 0,
    pricerPerSqMeter: 0,
    size: 120,
    title: "",
    lastFloor: false,
  },
  {
    id: 11,
    completionProgress: "completed",
    constructionType: "brick",
    floor: null,
    price: 115000,
    pricerPerSqMeter: 1038.56,
    size: 110.73,
    title: "Южен, семеен имот с покрита веранда и двор Изгрев, Бургас",
    lastFloor: true,
  },
];

function filterRows(rows, filters) {
  // if the filters are empty return the initial array
  if (Object.keys(filters).length === 0) return rows;

  return rows.filter((row) => {
    return Object.keys(filters).every((accessor) => {
      const value = row[accessor];
      const searchValue = filters[accessor];
      // if the value is an instance of the string object and is of "string" data type
      if (typeof value == "string" || value instanceof String) {
        return value.toLowerCase().includes(searchValue.toLowerCase());
      }
      // if the value is an instance of the number object and is of "number" data type
      if (typeof value == "number" || value instanceof Number) {
        return value == searchValue;
      }
      // if the value is a boolean: has a value of true or false
      if (value === true || value === false) {
        return (
          (searchValue === true && value) || (searchValue === false && !value)
        );
      }
      return false;
    });
  });
}

// Tests with strings
// console.log(filterRows(mockApartments, { title: "Арена" }));
// console.log(filterRows(mockApartments, { completionProgress: "construction" }));
// console.log(filterRows(mockApartments, { constructionType: "brick" }));

// Tests with numbers
// console.log(filterRows(mockApartments, { size: 96 }));
// console.log(filterRows(mockApartments, { price: 100000 }));
// console.log(filterRows(mockApartments, { pricerPerSqMeter: 96 }));

// Test with booleans
console.log(filterRows(mockApartments, { lastFloor: false }));
console.log(filterRows(mockApartments, { lastFloor: true }));
