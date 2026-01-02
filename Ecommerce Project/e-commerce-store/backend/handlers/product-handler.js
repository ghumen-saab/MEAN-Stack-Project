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
async function getProductById(id) {
    let product = await Product.findById(id);
    return product.toObject();
}
// async function getNewProducts() {
//     let newProducts = await Product.find({ isNewProduct: true });
//     return newProducts.map((p) => p.toObject());
// }
// async function getFeaturedProducts() {
//     let featuredProducts = await Product.find({ isFeatured: true });
//     return featuredProducts.map((p) => p.toObject());
// }
// Export the functions

async function getNewProducts() {
    try {
        const newProducts = await Product
            .find({ isNewProduct: true })
            .lean(); //  IMPORTANT

        return newProducts.map(p => ({
            ...p,
            id: p._id.toString() //  Angular @for FIX
        }));
    } catch (error) {
        console.error('getNewProducts error:', error);
        throw error;
    }
}

async function getFeaturedProducts() {
    try {
        const featuredProducts = await Product
            .find({ isFeatured: true })
            .lean(); // IMPORTANT

        return featuredProducts.map(p => ({
            ...p,
            id: p._id.toString()
        }));
    } catch (error) {
        console.error('getFeaturedProducts error:', error);
        throw error;
    }
}
module.exports = {
    addProduct, updateProduct, deleteProduct,
    getAllProducts, getProductById,
    getNewProducts, getFeaturedProducts
};