const getAllNeighborhoodApartments = async (req, res) => {
  let neighborhoodData = [];
  let scraperData;

  try {
    for (let neighborhood in neighborhoods) {
      // scraperData = await getAllApartments(neighborhoods[neighborhood]);
      // neighborhoodData.push(scraperData);

      console.log(neighborhoods[neighborhood]);
    }

    // TODO: save scraped data to database

    // scraperData.forEach(async (apartment) => {
    //   const newApartment = new Apartment({
    //     title: apartment.title,
    //     price: apartment.price,
    //     size: apartment.size,
    //     pricePerSqMeter: apartment.pricePerSqMeter,
    //     constructionType: apartment.constructionType,
    //   });
    //   await newApartment.save();
    // });

    return res.status(200).json({
      // count: scraperData.length,
      // result: scraperData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.toString(),
    });
  }
};

module.exports = {
  getAllNeighborhoodApartments,
};
