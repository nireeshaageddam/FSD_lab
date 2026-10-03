const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

console.log(
    "MONGO_URI format:",
    process.env.MONGO_URI
        ? process.env.MONGO_URI.replace(
            /\/\/([^:]+):([^@]+)@/,
            "//USERNAME:PASSWORD@"
        )
        : "NOT FOUND"
);

const Student = require("./models/Student");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    family: 4,
    tls: true,
    serverSelectionTimeoutMS: 15000
})
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error.message);

        if (error.reason && error.reason.servers) {
            console.log("\nServer errors:");

            for (const [server, details] of error.reason.servers) {
                console.log("\nServer:", server);

                if (details.error) {
                    console.log("Error:", details.error.message);
                } else {
                    console.log("No detailed server error");
                }
            }
        }
    });

app.get("/", (req, res) => {
    res.send("Week 9 Student REST API is running");
});

app.post("/api/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();

        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

app.get("/api/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.get("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    } catch (error) {
        res.status(400).json({
            message: "Invalid student ID"
        });
    }
});

app.put("/api/students/:id", async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

app.delete("/api/students/:id", async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: "Invalid student ID"
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});