// URL for the API endpoint
const apiUrl = 'https://run.mocky.io/v3/f8a9d4ab-5ab7-4c51-a89b-cc64731649ac';

// Reference to the select element
const selectDropdown = document.getElementById('apiDataDropdown');

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
    // Log the data to the console to inspect its structure
    console.log('Data from API:', data);

    // Handle the data from the API
    // Clear existing options in case this code is run multiple times
    selectDropdown.innerHTML = '';
    
    // Iterate through the data and create an option for each item
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.companyId; // Set the value attribute based on your data structure
      option.text = item.companyName; // Set the text content based on your data structure
      selectDropdown.appendChild(option); // Append the option to the selectDropdown
    });
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
