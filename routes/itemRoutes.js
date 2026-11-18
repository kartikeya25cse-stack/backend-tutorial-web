
const express = require("express");

const router = express.Router();

const {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
} = require("../controllers/itemController");

// CREATE
router.post("/", createItem);

// READ ALL
router.get("/", getItems);

// READ SINGLE
router.get("/:id", getItemById);

// UPDATE
router.put("/:id", updateItem);

// DELETE
router.delete("/:id", deleteItem);

module.exports = router;
