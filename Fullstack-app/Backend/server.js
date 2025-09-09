const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/users");

app.use("/", indexRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
