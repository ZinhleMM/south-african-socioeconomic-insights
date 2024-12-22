/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

const express = require('express');
const router = express.Router();
const db = require('server/db');

// API endpoint to get all households
router.get('/', async (req, res) => {
    try {
        const query = `SELECT * FROM Household`;
        const [rows] = await db.query(query);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching households:', error);
        res.status(500).json({ error: 'Failed to fetch households' });
    }
});

// API endpoint to get a specific household by uqnr
router.get('/:uqnr', async (req, res) => {
    try {
        const uqnr = req.params.uqnr;
        const query = `SELECT * FROM Household WHERE uqnr = ?`;
        const [rows] = await db.query(query, [uqnr]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Household not found' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.error('Error fetching household:', error);
        res.status(500).json({ error: 'Failed to fetch household' });
    }
});

// API endpoint to get households by province
router.get('/province/:provinceId', async (req, res) => {
    try {
        const provinceId = req.params.provinceId;
        const query = `SELECT * FROM Household WHERE prov = ?`;
        const [rows] = await db.query(query, [provinceId]);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching households by province:', error);
        res.status(500).json({ error: 'Failed to fetch households by province' });
    }
});

// API endpoint to get households by geographic type
router.get('/geo/:geoType', async (req, res) => {
    try {
        const geoType = req.params.geoType;
        const query = `SELECT * FROM Household WHERE geo_type = ?`;
        const [rows] = await db.query(query, [geoType]);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching households by geographic type:', error);
        res.status(500).json({ error: 'Failed to fetch households by geographic type' });
    }
});

// API endpoint to get households by income range
router.get('/income/:min/:max', async (req, res) => {
    try {
        const minIncome = req.params.min;
        const maxIncome = req.params.max;
        const query = `SELECT * FROM Household WHERE totmhinc BETWEEN ? AND ?`;
        const [rows] = await db.query(query, [minIncome, maxIncome]);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching households by income range:', error);
        res.status(500).json({ error: 'Failed to fetch households by income range' });
    }
});

module.exports = router;