const express = require("express");
const router = express.Router();
const Photo = require("../models/Photo");

router.get("/", (req, res) => res.send("You'll see shit here eventually."));

router.get("/photos", async (req, res) => {
  try {
    const photos = await Photo.find();
    return res.json({ photos });
  } catch (error) {
    console.log("error");
    return res.status(500).send(error.message);
  }
});

module.exports = router;
