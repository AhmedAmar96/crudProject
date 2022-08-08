const Product = require("../model/productModel");

const getProducts = async (req, res) => {
    const { name } = req.query;
    if (name) {
        try {
            const data = await Product.find({
                "productName": { $regex: `${name}` }
            });
            res.json({ message: "success", data });
        } catch (err) {
            res.json({ message: "error", err });
        }
    } else {
        try {
            const data = await Product.find();
            res.json({ message: "success", data });
        } catch (err) {
            res.json({ message: "error", err });
        }
    }
};

const addProduct = async (req, res) => {
    const { productName, productPrice, productCategory, productDesc } = req.body;
    try {
        const newProduct = new Product({  productName, productPrice, productCategory, productDesc });
        const addData = await newProduct.save();
        res.json({ message: "success", addData });
    } catch (err) {
        res.json({ message: "error", err });
    }
}

const updateProduct = async (req, res) => {
    const { _id } = req.params;
    const {  productName, productPrice, productCategory, productDesc } = req.body;
    try {
        const updateData = await Product.updateOne({ _id }, { "$set": {  productName, productPrice, productCategory, productDesc } });
        res.json({ message: "success", updateData });
    } catch (err) {
        res.json({ message: "error", err });
    }
}

const deleteProduct = async (req, res) => {
    const { _id } = req.params;
    try {
        const deleteProduct = await Product.deleteOne({ _id });
        res.json({ message: "success", deleteProduct });
    } catch (err) {
        res.json({ message: "error", err });
    }
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
}