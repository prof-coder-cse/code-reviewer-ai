import aiService from "../services/ai.services.js";
const getResponse = async (req, res) => {
  console.log("Body:", req.body);
  console.log("Prompt:", req.body?.prompt);

  const { prompt, language } = req.body;

  if (!prompt) {
    return res.status(400).send("Prompt is required");
  }

  const response = await aiService(prompt, language);

  res.send(response);
};

export default getResponse;
