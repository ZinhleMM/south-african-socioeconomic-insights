/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

const express = require('express');
const app = express();
const db = require('./db'); // Assuming you have a db.js file for database connection

// API routes
app.use('/api/households', require('./routes/households'));
app.use('/api/food_security', require('./routes/food_security'));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));