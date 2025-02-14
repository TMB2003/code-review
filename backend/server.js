const express = require('express');
const cors = require('cors');
const aiRoutes = require('./src/routes/ai.routes'); // Adjusted path
const app = express();

app.use(cors());
app.use(express.json());
app.use('/ai', aiRoutes);

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});