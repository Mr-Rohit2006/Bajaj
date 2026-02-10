const express = require('express');
const router = express.Router();
const { GoogleGenAI }= require("@google/genai");

const email = "rohit1434.be23@chitkarauniversity.edu.in";
const fibonacci = require('../controllers/fibonacci.js');
const prime = require('../controllers/prime.js');
const lcm = require('../controllers/Lcm.js');
const hcf = require('../controllers/Hcf.js');

function isIntegerArray(arr) {
  return Array.isArray(arr) && arr.every(Number.isInteger);
}

async function apiCall(data) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyBEMFFC2wluRCe2KrhR61iKjNOmstFwNbQ"
  });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: data
  });

  console.log(response.text);
  return response.text;
}

router.get('/health', (req, res) => {
  res.json({ is_success: true, offical_email: email });
});

router.post('/bfhl', async (req, res) => {
  try {
    let data;

    if (req.body.fibonacci !== undefined) {
      const num = req.body.fibonacci;
      const n = typeof num === "string" ? Number(num.trim()) : num;

      if (!Number.isFinite(n)) {
        return res.status(400).json({ error: "`fibonacci` must be a valid number" });
      }
      if (!Number.isInteger(n)) {
        return res.status(400).json({ error: "`fibonacci` must be an integer" });
      }

      data = fibonacci(n);

    } else if (req.body.prime !== undefined) {
      const arr = req.body.prime;
      if (!isIntegerArray(arr)) {
        return res.status(400).json({ error: "`prime` must be an array of integers" });
      }
      data = prime(arr);

    } else if (req.body.lcm !== undefined) {
      const arr = req.body.lcm;
      if (!isIntegerArray(arr)) {
        return res.status(400).json({ error: "`lcm` must be an array of integers" });
      }
      data = lcm(arr);

    } else if (req.body.hcf !== undefined) {
      const arr = req.body.hcf;
      if (!isIntegerArray(arr)) {
        return res.status(400).json({ error: "`hcf` must be an array of integers" });
      }
      data = hcf(arr);

    } else if (req.body.api !== undefined) {
      const api = req.body.api;
      data = await apiCall(api);

    } else {
      return res.status(400).json({
        error: "Body must contain one of: fibonacci | prime | lcm | hcf | api"
      });
    }

    return res.json({ is_success: true, offical_email: email, data });
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      offical_email: email,
      error: err?.message || "Internal server error"
    });
  }
});

module.exports = router;
