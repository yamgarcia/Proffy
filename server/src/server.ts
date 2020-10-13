import express from "express";

const app = express();

app.get("/users", (req, res) => {
  const users = [{ name: "marcos" }];

  return res.send("hello world");
});

app.listen(3333);
