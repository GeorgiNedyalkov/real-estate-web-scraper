const API_URL = "http://localhost:3001"

export async function listApartments() {
  const response = await fetch(`${API_URL}/api/v1/test`)
  return await response.json()
}

// export async function createApartmentEntry(entry) {
//   const response = await fetch(`${API_URL}/api/v1/test2`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(entry),
//   })

//   return response
// }
