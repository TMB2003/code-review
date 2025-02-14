const aiService = require("../services/ai.service"); // ✅ Ensure this line exists

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ message: 'Prompt is required' });
    }

    try {
        const response = await aiService.generateContent(code); // ✅ Call aiService correctly
        res.send(response);
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
};
