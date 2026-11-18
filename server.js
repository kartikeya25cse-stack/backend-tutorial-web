require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/items", itemRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Backend API is running successfully!");
});

const PORT = process.env.PORT || 5001;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();