const express = require('express');
const router = express.Router();
const Product = require("./../db/product");
const { addProduct, updateProduct, deleteProduct, getAllProducts, getProductById } = require('../handlers/product-handler');
// Create a new product
router.post("", async (req, res) => {
    let model = req.body;
    let result = await addProduct(model);
    res.send({ result, message: "Product created successfully" });
});
// Get a all product
router.get("/", async (req, res) => {
    let result = await getAllProducts();
    res.send(result);
});
// Get a specific product
router.get("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await getProductById(id);
    res.send(result);
});
// Update a product
router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params["id"];
    let result = await updateProduct(id, model);
    res.send({ result, message: "Product updated successfully" });
});
// Delete a product
router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await deleteProduct(id);
    res.send({ message: "Product deleted successfully" });
});
module.exports = router;