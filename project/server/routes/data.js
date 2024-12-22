/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

const express = require('express');
const router = express.Router();
const db = require('server/db');
const csv = require('csv-parser');
const fs = require('fs');

router.post('/upload', (req, res) => {
    const results = [];
    fs.createReadStream('assets/data/GHS-2023-HOUSE_F1.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            const processedData = processCSVData(results);

            // Assuming your database has tables like Household, Geography, Assets, FoodSecurity
            storeDataInDatabase(processedData, (err) => {
                if (err) {
                    console.error('Error storing data in database:', err);
                    res.status(500).json({ error: 'Failed to store data in database' });
                } else {
                    res.json({ message: 'Data successfully processed and stored' });
                }
            });
        });
});

function processCSVData(data) {
    const processed = {
        households: [],
        geography: [],
        assets: [],
        foodSecurity: []
    };

    const geographyMap = new Map(); // To keep track of unique geography entries

    data.forEach(row => {
        // Assuming your CSV has columns like uqnr, prov, geo_type, hholdsz, etc.
        // You may need to adjust column names based on your actual CSV

        // Household data
        processed.households.push({
            uqnr: parseInt(row.uqnr),
            prov: parseInt(row.prov),
            geo_type: row.geo_type,
            hholdsz: parseInt(row.hholdsz),
            totmhinc: parseFloat(row.totmhinc),
            fin_exp: parseFloat(row.fin_exp),
            agr_agr: row.agr_agr === '1' ? 1 : 0, // Convert to boolean
            com_int_fixed: row.com_int_fixed === '1' ? 1 : 0, // Convert to boolean
            hsg_maind: row.hsg_maind,
            head_popgrp: row.head_popgrp,
            tra_taxi_cost: parseFloat(row.tra_taxi_cost)
        });

        // Geography data (handling duplicates)
        const geoKey = `${row.prov}-${row.geo_type}`;
        if (!geographyMap.has(geoKey)) {
            geographyMap.set(geoKey, {
                prov: parseInt(row.prov),
                geo_type: row.geo_type,
                // ... other geography columns
            });
        }

        // Assets data
        processed.assets.push({
            uqnr: parseInt(row.uqnr),
            // ... other assets columns
        });

        // Food security data
        processed.foodSecurity.push({
            uqnr: parseInt(row.uqnr),
            // ... other food security columns
        });
    });

    // Convert geography map to array
    processed.geography = Array.from(geographyMap.values());

    return processed;
}

function storeDataInDatabase(data, callback) {
    // Use Promise.all to run all queries concurrently
    Promise.all([
        insertData('Household', data.households),
        insertData('Geography', data.geography),
        insertData('Assets', data.assets),
        insertData('FoodSecurity', data.foodSecurity)
    ])
    .then(() => callback(null)) // If all successful, call the callback with no error
    .catch(err => callback(err)); // If any fail, call the callback with the error
}

// Helper function to insert data into a table
function insertData(tableName, data) {
    if (data.length === 0) {
        return Promise.resolve(); // Nothing to insert
    }

    const query = `INSERT INTO ${tableName} SET ?`;
    return Promise.all(data.map(item => db.query(query, item)));
}

module.exports = router;