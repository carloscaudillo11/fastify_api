import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: String,
    image: String,
    description: String,
    price: Number,
    quatity: Number
}, {
    timestamps: true,
    versionKey: false
});

export default model("Product", productSchema);