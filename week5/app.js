// 5(i) - SETUP EXPRESS SERVER
const express = require("express");

const app = express();

const PORT = 3000;

// 5(ii) - DEFINE BASIC ROUTES

app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

// 5(iii) - WORK WITH ROUTE PARAMETERS

app.get("/user/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

// 5(iv) - USE QUERY PARAMETERS

app.get("/search", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});

// 5(v) - BUILD DYNAMIC URLs
app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Product ID: ${id}`);
});

// START THE SERVER

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});