
const mongoose = require("mongoose");

// Define item schema
const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true,
            min: 0
        },

        quantity: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

// Create model
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
