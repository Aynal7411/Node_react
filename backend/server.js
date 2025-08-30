const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());




mongoose.connect("mongodb://127.0.0.1:27017/Mydata")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => res.send("This massage is developed in bacend side"));
app.use("/api/users", userRoutes);

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
