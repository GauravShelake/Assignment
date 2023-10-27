const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


mongoose.connect("mongodb://127.0.0.1:27017/task");
console.log('MongoDB connected')

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
