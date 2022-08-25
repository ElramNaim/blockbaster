const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/movies", (req, res) => {
  fs.readFile("./movies.json", "utf8", (err, data) => {
    if (err) {
      console.log("Error");
    }
    if (data) {
      const movies = JSON.parse(data);
      res.send(movies);
    }
  });
});
app.listen(6857);
