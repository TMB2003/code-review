const express = require('express');
const cors = require('cors');
const aiRoutes = require('./src/routes/ai.routes'); // ✅ Only if inside src/
require('dotenv').config(); // Ensure environment variables are loaded

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from AI Code Reviewer API!");
});

app.use('/ai', aiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
