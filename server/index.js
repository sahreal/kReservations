const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes.js");
const path = require("path");
require("dotenv").config();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../dist/")));

app.use("/", router);

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
