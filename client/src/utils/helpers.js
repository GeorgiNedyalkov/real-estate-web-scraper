import { mockApartments } from "../data/mockData.js";

export default function filterRows(rows, filters) {
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

console.log(
  filterRows(mockApartments, {
    title: "",
    bedrooms: "",
    bathrooms: "",
    size: "105",
    price: "",
    completionProgress: "",
    constructionType: "",
  })
);
