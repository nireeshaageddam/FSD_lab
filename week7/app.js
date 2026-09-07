const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        name: "Student",
        course: "Web Development"
    });
});

app.post("/submit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
        return res.send("Please enter both name and email.");
    }

    res.send(`Name: ${name}<br>Email: ${email}`);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});