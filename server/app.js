require("dotenv").config();
require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoute");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/", userRoutes);

app.listen(4001, () => console.log("Server Connected to port 4000"));
