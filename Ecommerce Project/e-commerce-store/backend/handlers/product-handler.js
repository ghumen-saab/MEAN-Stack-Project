const Product = require("./../db/product");
// Add a new product
async function addProduct(model) {
    let product = new Product({
        ...model,
        // name: model.name,
        // shortDescription: model.shortDescription,
        // description: model.description,
        // Price: model.Price,
        // discount: model.discount,
        // images: model.images,
        // categoryId: model.categoryId
    });
    await product.save();
    return product.toObject();
}
// Update an existing product
async function updateProduct(id, model) {
    await Product.findByIdAndUpdate(id, model);
    return;
}
// Delete a product
async function deleteProduct(id) {
    await Product.findByIdAndDelete(id);
    return;
}
// Get all products
async function getAllProducts() {
    let products = await Product.find();
    return products.map((c) => c.toObject());
}
// Get a specific product
async function getProduct(id) {
    let product = await Product.findById(id);
    return product.toObject();
}
// Export the functions
module.exports = { addProduct, updateProduct, deleteProduct, getAllProducts, getProduct };