const express = require('express');
const app = express();
const port = 3000;

// Middleware → print message and time in terminal
app.use((req, res, next) => {
  console.log("Request received at:", new Date().toLocaleString());
  next();
});

// Route → send message and time to browser
app.get('/', (req, res) => {
  const time = new Date();

  res.json({
    message: "Current Server Time",
    time: time.toLocaleString()
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});