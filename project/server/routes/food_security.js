/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

const express = require('express');
const router = express.Router();
const db = require('server/db');

// API endpoint to get food security data for a specific province
router.get('/province/:provinceId', async (req, res) => {
    try {``
        const provinceId = req.params.provinceId;
        const query = `
            SELECT fs.fsd_hungry, fs.fsd_ranout, fs.fsd_foodvariety
            FROM FoodSecurity fs
            JOIN Household h ON fs.uqnr = h.uqnr
            WHERE h.prov = ?
        `;
        const [rows] = await db.query(query, [provinceId]);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching food security data:', error);
        res.status(500).json({ error: 'Failed to fetch food security data' });
    }
});

// API endpoint to get average food security indicators by province
router.get('/average', async (req, res) => {
    try {
        const query = `
            SELECT h.prov,
                   AVG(fs.fsd_hungry) AS average_hungry,
                   AVG(fs.fsd_ranout) AS average_ranout,
                   AVG(fs.fsd_foodvariety) AS average_foodvariety
            FROM FoodSecurity fs
            JOIN Household h ON fs.uqnr = h.uqnr
            GROUP BY h.prov
        `;
        const [rows] = await db.query(query);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching average food security data:', error);
        res.status(500).json({ error: 'Failed to fetch average food security data' });
    }
});

// API endpoint to get food security data filtered by income range
router.get('/income/:min/:max', async (req, res) => {
    try {
        const minIncome = req.params.min;
        const maxIncome = req.params.max;
        const query = `
            SELECT fs.fsd_hungry, fs.fsd_ranout, fs.fsd_foodvariety
            FROM FoodSecurity fs
            JOIN Household h ON fs.uqnr = h.uqnr
            WHERE h.totmhinc BETWEEN ? AND ?
        `;
        const [rows] = await db.query(query, [minIncome, maxIncome]);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching food security data by income:', error);
        res.status(500).json({ error: 'Failed to fetch food security data by income' });
    }
});

module.exports = router;