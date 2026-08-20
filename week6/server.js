const express = require("express");

const app = express();

const PORT = 3000;

// Read JSON data
app.use(express.json());

// Custom middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// GET request
app.get("/users", (req, res) => {
    res.json({
        message: "GET request successful",
        users: ["Nireesha", "Chandini", "Rahul"]
    });
});

// POST request
app.post("/users", (req, res) => {
    const user = req.body;

    res.json({
        message: "User created successfully",
        user: user
    });
});

// PUT request
app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;

    res.json({
        message: "User updated successfully",
        id: id,
        user: updatedUser
    });
});

// DELETE request
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: "User deleted successfully",
        id: id
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});