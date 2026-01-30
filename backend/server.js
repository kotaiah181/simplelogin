const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

// CONNECT TO ATLAS
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));


// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Backend API is Working!");
});

// USE RENDER PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
