import React, { useState } from "react";
import "./Home.css";
import Football from "../components/Football";

function Home() {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("info");
  const [signal, setSignal] = useState({ message: "", color: "black" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/signal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, type }),
      });
      const data = await res.json();
      setSignal({ message: data.message, color: data.color });
      setMessage("");
    } catch (err) {
      setSignal({ message: "Error sending message", color: "red" });
    }
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi User, this is the Home page. Connect with Node.js APIs below!</p>

        <form className="signal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
          <button type="submit">Send Signal</button>
        </form>

        {signal.message && (
          <p
            className="signal-message"
            style={{ color: signal.color, fontWeight: "bold", marginTop: "20px" }}
          >
            {signal.message}
          </p>
        )}
      </div>
      <div className="football-section">
         <Football />
      </div>
    </div>
  );
}

export default Home;
