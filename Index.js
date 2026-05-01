const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const SECRET = "beegielz-secret";

// Dummy database (sementara)
let users = [];
let invites = ["elite@beegielz.com"];

// REGISTER (invite only)
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  if (!invites.includes(email)) {
    return res.status(403).json({ msg: "Not invited" });
  }

  const hashed = await bcrypt.hash(password, 10);

  users.push({ email, password: hashed, role: "ELITE" });

  res.json({ msg: "Registered" });
});

// LOGIN
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ msg: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ msg: "Wrong password" });

  const token = jwt.sign({ email, role: user.role }, SECRET);

  res.json({ token });
});

// PROTECTED ROUTE
app.get("/api/dashboard", (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ msg: "Welcome ELITE", user: decoded });
  } catch {
    res.status(401).json({ msg: "Unauthorized" });
  }
});

app.listen(3000, () => console.log("Server running"));
