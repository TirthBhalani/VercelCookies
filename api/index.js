const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/data", async (req, res) => {
  try {
    const response = await axios.get("https://www.nseindia.com/option-chain", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://www.nseindia.com/",
      },
    });

    res.json(response.headers);
  } catch (error) {
    console.error("Error fetching NSE data:", error.message);
    res.status(500).send("Failed to fetch data.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});