var express = require("express");
var router = express.Router();

//Not the final stage, brainstroming and getting starter ideas for Moneta Backend
router.get("/", function (req, res, next) {
  res.status(200).json({ message: "Create Orders" });
});

router.post("/", function (req, res, next) {
  res.status(200).json({ message: "Upload Orders" });
});

router.put("/:id", function (req, res, next) {
  res.status(200).json({ message: `Update Orders ${req.params.id}` });
});

router.delete("/:id", function (req, res, next) {
  res.status(200).json({ message: `Delete Orders ${req.params.id}` });
});

module.exports = router;
