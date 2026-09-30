const express = require("express");
const router = express.Router();

router.use("/clothings", require("./controllers-routes/clothings"));
router.use("/food", require("./controllers-routes/food"));
router.use("/furniture", require("./controllers-routes/furniture"));
router.use("/furniture", require("./controllers-routes/furniture"));

router.get("/", (req, res) => {
  res.send("API is working!");
});

module.exports = router;
