
const Item = require("../models/itemModel");

// CREATE ITEM
const createItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);

        res.status(201).json({
            success: true,
            message: "Item created successfully",
            data: item
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// GET ALL ITEMS
const getItems = async (req, res) => {
    try {
        const items = await Item.find();

        res.status(200).json({
            success: true,
            data: items
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET SINGLE ITEM
const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            });
        }

        res.status(200).json({
            success: true,
            data: item
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// UPDATE ITEM
const updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Item updated successfully",
            data: item
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE ITEM
const deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Item deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
};
