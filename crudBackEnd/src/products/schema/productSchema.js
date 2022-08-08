const { Schema } = require("mongoose")

const productSchema = new Schema(
    {
        productName: String,
        productPrice: Number,
        productCategory: String,
        productDesc: String
    },
    {
        timestamps: true
    }
);

module.exports = productSchema;