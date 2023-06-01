function filterData(apartments) {
  const filteredApartments = [];
  const skippedApartments = [];

  for (let apartment of apartments) {
    if (
      isNaN(apartment.price) ||
      isNaN(apartment.size) ||
      isNaN(apartment.pricePerSqMeter)
    ) {
      skippedApartments.push(apartment);
    } else {
      filteredApartments.push(apartment);
    }
  }

  return [filteredApartments, skippedApartments];
}

module.exports = filterData;
