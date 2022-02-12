const express = require("express");
const cors = require("cors");
const { Config } = require("./config/index");
const port = new Config().PORT();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/v1", require("./routes/routes"));

app.listen(port, () => console.log("Server is running in:", port));