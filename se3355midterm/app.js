// URL for the API endpoint
const apiUrl = 'https://run.mocky.io/v3/f8a9d4ab-5ab7-4c51-a89b-cc64731649ac';

// Make the HTTP request using the fetch API
fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    return response.json();
  })
  .then(data => {
    // Handle the data from the API
    console.log('Data from API:', data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
