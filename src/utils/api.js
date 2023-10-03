const baseUrl = "https://jsonplaceholder.typicode.com";

export const getItems = async () => {
  try {
    const response = await fetch(`${baseUrl}/items`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/items/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return id; // We return the id of the deleted item for convenience.
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

export const postItem = async (name, imageUrl, weather) => {
  try {
    const response = await fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, imageUrl, weather }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error posting new item:", error);
    throw error;
  }
};
