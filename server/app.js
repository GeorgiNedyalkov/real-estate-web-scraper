const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const apartments = require("./routes/apartments")
const connectDB = require("./db/connect")
require("dotenv").config()

const notFound = require("./middlewares/not-found")
const errorHandler = require("./middlewares/error-handler")

const app = express()

// router

// middlewares
app.use(morgan("common"))
app.use(express.json())
app.use(helmet())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
)
// Serve Static Files
app.use(express.static("./public"))

// routes
app.use("/api/v1/apartments", apartments)

// middlewares
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
