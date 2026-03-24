const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("Request received", new Date().toLocaleString());
  next();
});

const user = [
  { id: 1, name: "Srushti", email: "srushti@gmail.com" },
  { id: 2, name: "sakhi", email: "sakhi@gmail.com" },
  { id: 3, name: "pranali", email: "pranali@gmail.com" },
  { id: 4, name: "paryusha", email: "paryusha@gmail.com" },
  { id: 5, name: "Suhana", email: "suahan@gmail.com" },
];

app.get("/user", (req, res) => {
  res.json(user);
});

app.get("/user/:id", (req, res) => {
  const userId = Number(req.params.id);   
  console.log("Requested ID:", userId);

  const userById = user.find(u => u.id === userId);

  if (userById) {
    res.json(userById);
  } else {
    res.status(404).json({ message: "User not found" }); 
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});