# Creating the API for the Real Estate Webscraper

## Install Dependencies

- express, nodemon, mongoose, dotenv

- cors morgan helmet

## Spin up the server

## Set up File and Folder structure

### Folders:

- routes
- controllers
- errors
- middlewares
- models
- db

## Create routes

- Set up the Router and invoke it in the app

## Create the controller function

- Set up the controller functions
- Create the get all properties controller
- Create the create all properties controller
- Add all other controllers and set up the routes based on REST API best practices

```javascript
app.get("/api/v1/apartments")
app.post("/api/v1/apartments")
app.get("/api/v1/apartments/:id")
app.patch("/api/v1/apartments/:id")
app.delete("/api/v1/apartments/:id")
```

## Set up Postman to test all routes

## Set up not found and error middlewares

## Connect to DB

## Create a Schema and model for our apartaments

## Refactor controllers to udpate the database

- Create a new apartment instance with validation
- Create a get all properties functionlity

## Add notfound and error handler functions

## Refactor controllers with an asyncronous wrapper
