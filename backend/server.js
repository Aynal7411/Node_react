const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const os = require("os");

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());




mongoose.connect("mongodb://127.0.0.1:27017/Mydata")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => res.send("This massage is developed in bacend side"));
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
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
