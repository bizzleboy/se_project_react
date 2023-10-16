const baseUrl = "http://localhost:3001";

export const checkResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

export const getItems = async () => {
  const response = await fetch(`${baseUrl}/items`);
  return await checkResponse(response);
};

export const deleteItem = async (id) => {
  const response = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  });
  await checkResponse(response);
  return id; // We return the id of the deleted item for convenience.
};

export const postItem = async (name, link, weather) => {
  const response = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, link, weather }),
  });
  return await checkResponse(response);
};
