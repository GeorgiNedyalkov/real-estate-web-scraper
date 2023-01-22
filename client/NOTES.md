# Work Notes

## Implementing a Filter

Create a filter function that takes two parameters: array of rows to be filtered & filters object
We use filters as an object so that we can combine different filters.

Cases:

- if the filters object is empty => return the original array
