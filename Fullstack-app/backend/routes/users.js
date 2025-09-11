const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Rakesh" }, { id: 2, name: "John Doe" }, { id: 3, name: "John Keneddy" }, { id: 4, name: "Max Verstappen" }]);
});

module.exports = router;
