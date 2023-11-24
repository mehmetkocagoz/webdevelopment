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
      option.value = item.companyName; // Set the value attribute based on your data structure
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
 
const apiUrlAreaCode = 'https://run.mocky.io/v3/589b44db-2a4c-4d16-b535-8d9117ebc9eb'

const selectDropdownAreaCode = document.getElementById("apiDataDropdownAreaCode");
// Fetch data from the API
fetch(apiUrlAreaCode)
  .then(response => response.json())
  .then(data => {
    // Assuming the structure of your API response matches the example structure
    console.log(data);
   // Iterate through city_area_codes and append options to the dropdown
    data.forEach(areaCode => {
    const option = document.createElement("option");
    option.value = areaCode.areaCode;
    option.text = areaCode.areaCode;
    selectDropdownAreaCode.appendChild(option);
  });
  })
  .catch(error => console.error('Error fetching data:', error));
  


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
    var areaCode = document.getElementById('apiDataDropdownAreaCode').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var subject = document.getElementById('apiDataDropdownSubject').value;
    var beginnerYes = document.getElementById('beginnerYes').checked;
    var beginnerNo = document.getElementById('beginnerNo').checked;

    var isValid = true;
   
    // Basic validation
    if (firstName.trim() === '') {
      alert('Please enter First Name.');
      return isValid = false;
    }

    if (lastName.trim() === '') {
      alert('Please enter Last Name.');
      return isValid = false;
    }
    
    if (company === ''|| company === 'company') {
      alert('Please select a Company.');
      return isValid = false;
    }

    if (email.trim() === '') {
      alert('Please enter Email.');
      return isValid = false;
    }else if (!email.includes('@')) {
      alert('Email address must include @.');
      return isValid = false;
    }

    if (areaCode.trim() === '') {
      alert('Please select Area Code.');
      return isValid = false;
    }

    if (phoneNumber.trim() === '') {
      alert('Please enter valid phone number.');
      return isValid = false;
    }else if(phoneNumber.length !== 7){
      alert("Phone number's length must be 7");
      return isValid = false;
    }

    if (subject === '') {
      alert('Please select a subject.');
      return isValid = false;
    }

    if (!beginnerYes && !beginnerNo) {
      alert('Please select if you are a beginner.');
      return isValid = false;
    }

    return isValid;
  }
