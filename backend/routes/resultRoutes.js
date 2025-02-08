const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT department, party, COUNT(*) as count
            FROM poll
            GROUP BY department, party
        `);
        const groupedResults = rows.reduce((acc, row) => {
            acc[row.department] = acc[row.department] || [];
            acc[row.department].push({ party: row.party, count: row.count });
            return acc;
        }, {});
        res.status(200).json(groupedResults);
    } catch (error) {
        console.error('Error fetching results:', error);
        res.status(500).send({ error: 'An error occurred while fetching results.' });
    }
});

module.exports = router;

