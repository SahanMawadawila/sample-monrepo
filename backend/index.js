const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("OK"));
// Route 1: Home
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Route 2: Users
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ]);
});

// Route 3: About
app.get("/api/about", (req, res) => {
  res.json({
    appName: "Test Monorepo API",
    version: "1.0.0",
    description: "A simple Node.js backend for the monorepo",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
