import express from "express";

const app = express();

app.get('/app/', (req, res) => {
  res.send('Node.js app is working!');
});

export { app };
