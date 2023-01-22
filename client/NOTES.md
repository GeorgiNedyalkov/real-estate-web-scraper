# Work Notes

## Implementing a Filter

Create a filter function that takes two parameters: array of rows to be filtered & filters object
We use filters as an object so that we can combine different filters.

Cases:

- if the filters object is empty => return the original array

- filter through all the rows:
  - return all the filter object keys that satisfy the conditions:
    - get the search value: the filters object key
    - get the table data value
    - check to see the datatype of the data value:
    - if it is a string: lowercase it and see if it includes the searchvalue
    - if it is a boolean: check to see if the search value is true and the value is true || vice versa for false
    - if it is a number: check if the value is equal to the search value
    - return false if nothing else is true
