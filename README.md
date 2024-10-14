<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Real Estate Market Pulse</h3>

---

<p align="center"> 
The web scrapper collects data from listing channels, stores the information in a mongoDB database using an express REST API and displays the information in a frontend app developed with React.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## About

The scraper collects data for apartment listings from listing channels, sorts the apartments based on price, performs calclulations for average price, size and price per sqare meters, and displays the information in easy to read format.

## Getting Started

### Installation

1. Clone this repo

```
git clone https://github.com/GeorgiNedyalkov/real-estate-web-scraper.git
```

2. Change to the project directory

```
cd real-estate-web-scraper
```

3. Change to server directory

```
cd server
```

4. Install dependencies

```
npm install
```

5. Run the server in a development environment

```
npm run dev
```

6. Change directoy to client

```
cd ../client
```

7. Install dependencies using yarn

```
yarn
```

8. Start a local server

```
yarn dev
```

The project should be running on http://127.0.0.1:5173/

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

1. Comparative analysis

Input the stats of your property:

price, price per square meters, size, bedrooms, floor, level of construction.

Output:

4 comparable properties, 2 higher and 2 lower with the same characteristics.

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

## Inspiration for Key Statistics

Median Sales Price: The midpoint price of all properties sold during a specific period. It provides an overview of the overall price trend in the market.

Average Sales Price: The average price of all properties sold during a specific period. It can provide insights into the market's price range and any fluctuations.

Price per Square Foot: Calculating the average price of properties based on their square footage can help identify variations in pricing based on property size.

Number of Sales: The total count of properties sold during a specific period. This statistic helps gauge the level of market activity and demand.

Days on Market: The average or median number of days it takes for properties to sell after being listed. This metric indicates the speed of property sales and the level of buyer interest.

Inventory Levels: The number of properties available for sale at a given time. It can be represented as months of supply, which calculates how long it would take to sell all available properties based on the current sales pace.

Listing Price to Sales Price Ratio: The percentage of the listing price that properties typically sell for. It provides insight into whether sellers are achieving their desired prices or if negotiations are leading to lower sales prices.

Absorption Rate: The rate at which available properties are being sold or absorbed by the market. It helps assess the balance between supply and demand.

Foreclosure Rates: The number or percentage of properties in foreclosure or undergoing foreclosure proceedings. This data is relevant for assessing the health of the market and identifying potential investment opportunities.

New Construction Activity: The number of new residential or commercial construction projects and building permits issued. This statistic reflects the level of development and growth in the real estate market.

Rental Rates: The average rent prices for different types of properties (e.g., apartments, houses) in the market. This information is relevant for both tenants and investors looking for rental income.

Demographic Data: Population growth rates, age distributions, income levels, and other relevant demographic information that can impact the real estate market.

```

```

## Updates:

- Redesign filter
- Fix filter functionlity

Cosmetics:

- Update table footer buttons.

Data:

- Get all the data for the properties

## Refactor Notes:

- I want to look at average price, mode price and median price.
- I want to filter properties for specific neighborhood, completion type, apartment type, etc.
- I want to be able to create a comparative report with a button.
- I want to sort properties based on price or size
- I want to see the property listing
