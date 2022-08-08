const { Schema } = require("mongoose")

const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        age: Number
    },
    {
        timestamps: true
    }
);

module.exports = userSchema;