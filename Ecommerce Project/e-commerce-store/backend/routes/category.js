const express = require('express');
const router = express.Router();
const Category = require("./../db/category");
const { addCategory, updateCategory, deleteCategory, getCategories, getCategoryById } = require('../handlers/category-handler');
// Get all categories
router.get("/", async (req, res) => {
    let result = await getCategories();
    res.send(result);
});
// Get a specific category
router.get("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await getCategoryById(id);
    res.send(result);
});
// Create a new category
router.post("/", async (req, res) => {
    let model = req.body;
    let result = await addCategory(model);
    res.send({ result, message: "category created successfully" });
});
// Update a category
router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params["id"];
    let result = await updateCategory(id, model);
    res.send({ result, message: "category updated successfully" });
});
// Delete a category
router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await deleteCategory(id);
    res.send({ message: "category deleted successfully" });
});

module.exports = router;