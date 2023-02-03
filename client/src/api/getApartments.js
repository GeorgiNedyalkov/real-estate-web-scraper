const oneBedsUrl = "http://localhost:3001/api/v1/oneBedroomApartments";
const twoBedUrl = "http://localhost:3001/api/v1/twoBedroomApartments";
const threeBedsUrl = "http://localhost:3001/api/v1/threeBedroomApartments";

export async function getApartments(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data.result;
}

export async function getOneBeds() {
  const oneBeds = await getApartments(oneBedsUrl);
  return oneBeds;
}

export async function getTwoBeds() {
  const twoBeds = await getApartments(twoBedUrl);
  return twoBeds;
}
export async function getThreeBeds() {
  const threeBeds = await getApartments(threeBedsUrl);
  return threeBeds;
}
