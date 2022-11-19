const express = require("express");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.API_PORT || 3333;
const HOST = process.env.API_HOST || "localhost";

app.listen(PORT, HOST, () => {
  console.log("Listening on port " + PORT);
});
