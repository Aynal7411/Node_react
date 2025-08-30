import { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
// Pages import করতে হবে
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then(setMessage)
      .catch((err) => setMessage("Error: " + err.message));
  }, []);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
<Router>
  <>
    <header style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome To My Website for Learning MERN stack</h1>
    </header>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />} />
    </Routes>

    <div style={{ textAlign: "center", marginTop: "30px", color: "blue" }}>
      <h1>{message}</h1>
    </div>
    <Footer />
  </>
</Router>
  );
}

export default App;
