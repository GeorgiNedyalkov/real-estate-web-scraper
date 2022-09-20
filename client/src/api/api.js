const API_URL = "http://localhost:3002"

export async function listApartments() {
  const response = await fetch(`${API_URL}/api/v1/apartments`)
  return await response.json()
}

export async function createApartmentEntry(entry) {
  const response = await fetch(`${API_URL}/api/v1/apartments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(entry),
  })

  return response
}
