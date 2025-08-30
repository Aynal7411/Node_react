const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const os = require("os");
const fs = require('fs');
const util = require('util');

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());




mongoose.connect("mongodb://127.0.0.1:27017/Mydata")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => res.send("This massage is developed in backend side Now you are watching this sentence that i have written"));
app.use("/api/users", userRoutes);

app.get("/api/system-info", (req, res) => {
  const systemInfo = {
     hostname: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    arch: os.arch(),
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length,
    cpuSpeed: os.cpus()[0].speed + " MHz",
    totalMem: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB",
    freeMem: (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " GB",
    uptime: (os.uptime() / 3600).toFixed(2) + " hours",
    homeDir: os.homedir(),
    tempDir: os.tmpdir(),
    networkInterfaces: os.networkInterfaces(),
    loadAverage: os.loadavg(), // [1min, 5min, 15min load]
    userInfo: os.userInfo(),
  };
  res.json(systemInfo);
});

app.post("/api/signal", (req, res) => {
  const { message, type } = req.body;

  // type অনুযায়ী color assign
  let color;
  switch (type) {
    case "success":
      color = "green";
      break;
    case "warning":
      color = "orange";
      break;
    case "error":
      color = "red";
      break;
    default:
      color = "blue";
  }

  res.json({ message, color });
});

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const FILE_PATH = "students.json";
// API: Get all students
app.get('/api/students', async (req, res) => {
  try {
    const data = await readFile(FILE_PATH, 'utf8');
    
    // JSON parse
    const students = JSON.parse(data);

    // util.format example
    console.log(util.format("Sending %d students...", students.length));
    console.log(util.inspect(students, { colors: true, depth: null }));

    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Failed to read students" });
  }
});

// 🔹 নতুন student যোগ করা
app.post("/api/students", async (req, res) => {
  try {
    const { name, age, skills } = req.body;

    if (!name || !age || !skills) {
      return res.status(400).json({ error: "Missing fields!" });
    }

    const data = await readFile(FILE_PATH, "utf8");
    const students = JSON.parse(data);

    const newStudent = { name, age, skills };

    // util.types দিয়ে চেক
    if (!util.types.isArray(newStudent.skills)) {
      return res.status(400).json({ error: "Skills must be an array" });
    }

    students.push(newStudent);

    await writeFile(FILE_PATH, JSON.stringify(students, null, 2));

    console.log(util.format("Added student: %s (Age: %d)", name, age));
    console.log(util.inspect(newStudent, { colors: true, depth: null }));

    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: "Failed to add student" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
