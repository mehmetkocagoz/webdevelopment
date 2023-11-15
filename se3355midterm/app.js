// URL for the API endpoint
const apiUrl = 'https://run.mocky.io/v3/f8a9d4ab-5ab7-4c51-a89b-cc64731649ac';

// Reference to the select element
const selectDropdown = document.getElementById('apiDataDropdownCompany');

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

const apiUrlSubject = 'https://run.mocky.io/v3/9879ce22-00fd-4cca-89ca-12ddcba6fb9a';
const selectDropdown2 = document.getElementById('apiDataDropdownSubject');
// Make the HTTP request using the fetch API
fetch(apiUrlSubject)
  .then(response => {
    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    return response.json();
  })
  .then(data2 => {
    // Log the data to the console to inspect its structure
    console.log('Data from API:', data2);

    // Handle the data from the API
    // Iterate through the data and create an option for each item
    data2.forEach(item => {
      const option2 = document.createElement('option');
      option2.value = item.subject; // Set the value attribute based on your data structure
      option2.text = item.subject; // Set the text content based on your data structure
      selectDropdown2.appendChild(option2); // Append the option to the selectDropdown
    });
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
 

  //Validation on submit
  document.getElementById('basic-form').addEventListener('submit', function(event) {
    // Form validation logic
    if (!validateForm()) {
      event.preventDefault(); // Prevent the form from being submitted
    }else {
      // If the form is valid, redirect to another page
      window.location.href = 'formsubmit.html';
    }
  });

  function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var company = document.getElementById('apiDataDropdownCompany').value;
    var email = document.getElementById('email').value;
    var areaCode = document.getElementById('areaCode').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var subject = document.getElementById('apiDataDropdownSubject').value;
    var beginnerYes = document.getElementById('beginnerYes').checked;
    var beginnerNo = document.getElementById('beginnerNo').checked;

    var isValid = true;

    // Basic validation
    if (firstName.trim() === '') {
      displayErrorMessage('Please enter First Name.');
      isValid = false;
    }

    if (lastName.trim() === '') {
      displayErrorMessage('Please enter Last Name.');
      isValid = false;
    }

    if (company === '') {
      displayErrorMessage('Please select a Company.');
      isValid = false;
    }

    if (email.trim() === '') {
      displayErrorMessage('Please enter Email.');
      isValid = false;
    }

    if (areaCode.trim() === '' || phoneNumber.trim() === '') {
      displayErrorMessage('Please enter both Area Code and Phone Number.');
      isValid = false;
    }

    if (subject === '') {
      displayErrorMessage('Please select a Subject.');
      isValid = false;
    }

    if (!beginnerYes && !beginnerNo) {
      displayErrorMessage('Please select if you are a beginner.');
      isValid = false;
    }

    return isValid;
  }

  function displayErrorMessage(message) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    var formContent = document.querySelector('.form-content');
    formContent.appendChild(errorDiv);

    // Remove error message after 3 seconds (adjust as needed)
    setTimeout(function() {
      errorDiv.remove();
    }, 3000);
  }
