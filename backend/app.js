const express = require('express');
const pollRoutes = require('./routes/pollRoutes');
const resultRoutes = require('./routes/resultRoutes');
const app = express();
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:8088', methods: 'GET,POST' }));



app.use(express.json());
app.use('/poll', pollRoutes);
app.use('/results', resultRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

