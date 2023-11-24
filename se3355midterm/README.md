# API Data Dropdown Form

This project implements a web form with dynamic dropdowns populated using data from external APIs.

## Table of Contents
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Form Validation](#form-validation)
- [Azure Deployment](#azure-deployment)

## Description

The project is a web form that collects user information, including name, company, email, phone, subject, and a beginner status. The company, subject, and area code dropdowns are populated dynamically using data fetched from mocky APIs.

## Technologies Used

- HTML5
- Bootstrap 5
- JavaScript

## Project Structure

- **index.html**: The main HTML file containing the form structure.
- **style.css**: The stylesheet for styling the form.
- **app.js**: JavaScript file containing logic for fetching API data and form validation.

## API Endpoints

- **Company Dropdown**: [API Endpoint](https://run.mocky.io/v3/f8a9d4ab-5ab7-4c51-a89b-cc64731649ac)
- **Subject Dropdown**: [API Endpoint](https://run.mocky.io/v3/9879ce22-00fd-4cca-89ca-12ddcba6fb9a)
- **Area Code Dropdown**: [API Endpoint](https://run.mocky.io/v3/589b44db-2a4c-4d16-b535-8d9117ebc9eb)

## Form Validation

The form includes basic client-side validation to ensure that required fields are filled out and that email and phone number formats are valid. The validation logic is implemented in `app.js`.

## Azure Deployment

- **Deployed At**: [Deployment Address](https://nice-moss-0f5c11d0f.4.azurestaticapps.net/)