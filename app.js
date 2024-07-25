const express = require('express');
const OpenAI = require('openai');
require('dotenv').config()
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

const openAI = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
  });

app.post('/name-meaning', async (req, res) => {
  const { name } = req.body;
 
  if (!name) {
    return res.status(400).json({
      error: "Name is required"
    });
  }

  try {
    // Generate a prompt for OpenAI
    const prompt = `What does the name "${name}" mean?`;
    
    const chatCompletion = await openAI.chat.completions.create({
        model: 'gpt-4',
        messages: [
            { role: 'system', content: 'You are a helpful chat assistant who provide clearn meanings of names' },
            { role: 'user', content: prompt }
        ]
    })

    const result = chatCompletion.choices[0].message.content
    return res.json({ name, meaning: result });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Failed to retrieve name meaning."
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
