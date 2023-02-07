const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const apartments = require("./routes/apartments");
const connectDB = require("./db/connect");
require("dotenv").config();

// scraper
const getApartments = require("./scraper/scraper");

const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");
const getAllApartments = require("./scraper/scraper");

const app = express();

// middlewares
app.use(morgan("common"));
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
// Serve Static Files
app.use(express.static("./public"));

// routes
app.use("/api/v1/apartments", apartments);

app.get("/api/v1/oneBedroomApartments", async (req, res) => {
  try {
    const scraperData = await getAllApartments(
      `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]5=1574`
    );
    return res.status(200).json({
      result: scraperData,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.toString(),
    });
  }
});

app.get("/api/v1/twoBedroomApartments", async (req, res) => {
  try {
    const scraperData = await getApartments(
      `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1575`
    );
    return res.status(200).json({
      result: scraperData,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.toString(),
    });
  }
});

app.get("/api/v1/threeBedroomApartments", async (req, res) => {
  try {
    const scraperData = await getApartments(
      `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1576`
    );
    return res.status(200).json({
      result: scraperData,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.toString(),
    });
  }
});

app.get("/api/v1/studios", async (req, res) => {
  try {
    const scraperData = await getApartments(
      `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1573`
    );
    return res.status(200).json({
      result: scraperData,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.toString(),
    });
  }
});

// middlewares
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
