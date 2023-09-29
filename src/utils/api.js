const api = {
  // Mocking a addItem method that would typically make an HTTP request
  addItem: async (item) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!item) {
          reject(new Error("Invalid item data"));
          return;
        }
        // Mocking a successful server response after 1 second
        resolve({
          id: Date.now(), // Mock unique id
          ...item,
        });
      }, 1000);
    });
  },
  // Other API methods can be added here...
};

export default api;
