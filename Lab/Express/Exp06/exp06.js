const express = require("express");
const app = express();
const port = 3005;

// Routing is deciding what response send to different url

app.use((req, res, next) => {
  console.log("Request recive", new Date().toLocaleString());
  next();
});

app.get("/", (req, res) => {
  const time = new Date();

  res.json({
    message: "Current Server Time",
    time: time.toString(),
    iso: time.toISOString(),
  });
});

app.get("/time", (req, res) => {
  const time = new Date();

  res.json({
    message: "Current Server Time",
    time: time.toString(),
    iso: time.toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/time`);
});

//Middleware is function that written before send the response - check data, block info, authenticate user
// app.use(req,res,next=> {
//  console.log("Request recive", new Date())
//  })
// next - pass control to the next function