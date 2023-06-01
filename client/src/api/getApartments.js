export async function getApartments(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data.result;
}
