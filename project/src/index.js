import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const express = require('express');
const app = express();
const db = require('server/db'); // Assuming you have a db.js file for database connection

// API routes
app.use('/api/households', require('./routes/households'));
app.use('/api/food_security', require('./routes/food_security'));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));



