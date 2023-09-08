const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Replace with your own user information
const user_id = "suresh_suthar_242000";
const email = "ss0305@srmist.edu.in";
const roll_number = "RA2011003011323";

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const highest_alphabet = [...alphabets].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))[alphabets.length - 1];

    const response = {
      is_success: true,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    };

    return res.json(response);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Invalid request' });
  }
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  return res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
