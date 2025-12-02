const express = require('express');
const router = express.Router();
const Brand = require("./../db/brand");
const { addBrand, getBrands, getBrand, updateBrand, deleteBrand } = require('../handlers/brand-handler');

router.post("", async (req, res) => {
    let model = req.body;
    let result = await addBrand(model);
    res.send({ result, message: "Brand created successfully" });
});
router.get("/", async (req, res) => {
    let result = await getBrands();
    res.send(result);
});
router.get("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await getBrand(id);
    res.send(result);
});
router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params["id"];
    let result = await updateBrand(id, model);
    res.send({ result, message: "Brand updated successfully" });
});
router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await deleteBrand(id);
    res.send({ message: "Brand deleted successfully" });
});
module.exports = router;