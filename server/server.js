const express = require("express");
const path = require("path");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Early connection we will need to implement apollo eventually
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});
