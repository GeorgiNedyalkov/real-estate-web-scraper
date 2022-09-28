# Real Estate Market Pulse

Web Scraper for Real Estate Market Prices.

Collects information for apartments from listing channels for Izgrev neighborhood.

## MVP specification:

- Scrapes the information for one bedroom properties only.
- Displays the properties in a table.
- Calculates key statistics for simple view.
- Filter functionality based on different parameters.
- Backend API for the storage of the data and updating every day.

## Features:

- Collects all the information for properties listend on listing channels.
  First only [alo.bg](www.alo.bg) for one bedroom properties
  - Will include other listing channels, all property types, neighborhood and cities.
- Performs calculations for average prices, sizes and price per sq.m.
- Displays key statistics.
- Ranks and sorts properties based on price and presents them in a table.
- Filters properties based on different parameters.
- Price range
- Size range
- Completion progress
- Construction Type
- Floor
- Year Built

### Additional (optional features)

- Performs a comparative analysis based on a property.

The user inputs information about the home. Afterwards a report is generated with the 5 closest properties
to these characteristics.

## Example property data scruture

JSON:

```javascript
{
    "title": String,
    "type": String,
    "location": String,
    "price": Number,
    "size": Number,
    "construction": String,
    "yearBuilt": Number,
    "phase": String,
    "floor": Number,
}
```
