const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const connecdb = require("./config/db");
const authRouter = require("./routes/authentification");
require("dotenv").config();
connecdb();
app.use(cors());
app.use(express.json());

// path
app.use("/auth", authRouter);
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`you are connetecd to the port ${port}`);
});
