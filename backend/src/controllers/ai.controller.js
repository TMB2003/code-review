const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ message: 'Prompt is required' });
    }

    try {
        const response = await aiService.generateContent(code); // Correct function call
        res.send(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate response' });
    }
};
