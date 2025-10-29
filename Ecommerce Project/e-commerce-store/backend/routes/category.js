const express = require('express');
const router = express.Router();
const Category = require("./../db/category");

router.post("/", async (req, res) => {
    console.log("here");
    let response = req.body ?? { name: "Unknown Category" };

    let category = new Category({
        name: response?.name
    });
    await category.save();
    res.json(category.toObject());

});
module.exports = router;