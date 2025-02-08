const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/submit', async (req, res) => {
    const { name, department, party } = req.body;

    try {
        await db.query('INSERT INTO poll (name, department, party) VALUES (?, ?, ?)', [name, department, party]);
        res.status(200).send({ message: 'Vote submitted successfully!' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send({ error: 'An error occurred while submitting your vote.' });
    }
});

module.exports = router;

