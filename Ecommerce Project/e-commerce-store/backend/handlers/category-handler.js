const Category = require("./../db/category");
// Add a new category
async function addCategory(model) {
    let category = new Category({
        name: model.name
    });
    await category.save();
    return category.toObject();
}
// Update an existing category
async function updateCategory(id, model) {
    await Category.findOneAndUpdate({ _id: id }, model);
    return;
}
// Delete a category
async function deleteCategory(id, model) {
    await Category.findOneAndDelete({ _id: id }, model);
    return;
}
module.exports = { addCategory, updateCategory, deleteCategory };