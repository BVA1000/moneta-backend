var express = require("express");
var router = express.Router();

//Not the final stage, brainstroming and getting starter ideas for Moneta Backend
router.get("/", function (req, res, next) {
  res.status(200).json({ message: "Create Posts" });
});

router.post("/", function (req, res, next) {
  res.status(200).json({ message: "Upload Posts" });
});

router.put("/:id", function (req, res, next) {
  res.status(200).json({ message: `Update Posts ${req.params.id}` });
});

router.delete("/:id", function (req, res, next) {
  res.status(200).json({ message: `Delete Posts ${req.params.id}` });
});

module.exports = router;
