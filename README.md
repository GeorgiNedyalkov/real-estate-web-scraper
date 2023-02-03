# Real Estate Market Pulse

Web Scraper for Real Estate Market Prices.

## About

Collects information for apartments from listing channels for Izgrev neighborhood.
The scraper collects data for apartment listings from [alo.bg](www.alo.bg), sorts the apartments based on price, performs calclulations for average price, size and price per sqare meters, and displays the information in easy to read format.

## MVP specification

- Scrapes the information for one bedroom properties only.
- Displays the properties in a table.
- Calculates key statistics for simple view.
- Filter functionality based on different parameters.
- Backend API for the storage of the data and updating every day.

## Features

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

## User Stories

User Types:

- Investors
- Agents
- Buyers
- Sellers
- Loaners
- Developers

1. Developers
   Quickly determine what is the average price for a specific property type in a given neighborhood.

- View the average price per property type (1, 2, 3 bedroom).
- View the cheapest and most expensive prices for a type of property.
- View the average size of the property for the given type.
- View the number of properties offered based on three progress completion phases:
  - Completed
  - In Progress
  - Pre construction
- View the number of properties based on different construction type.
- Compare different properties based on floor, year built, completion progress, size range and price range.

## Property data scruture

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

## TODO

- To Implement:

  - search by neighborhood

- Bugs:
  - filter
  - calculation functions
  - search by type
- Deploy
