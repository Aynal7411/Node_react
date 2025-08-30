import { useState, useEffect } from "react";

function CountdownTimer({ initialSeconds = 10 }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return; // stop when 0

    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [seconds]);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
    padding: "30px",
    borderRadius: "12px",
    width: "250px",
    margin: "50px auto",
    backgroundColor: "rgba(197, 197, 240, 1)",
    color: "rgba(12, 11, 11, 1)",
    boxShadow: "0 8px 16px hsla(0, 76%, 50%, 0.25)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headingStyle = {
    fontSize: "18px",
    marginBottom: "15px",
    color: "rgba(255, 145, 0, 1)",
  };

  const timerStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    color: seconds <= 5 ? "rgba(202, 132, 132, 1)" : "hsla(9, 100%, 50%, 1.00)", // warning color if less than 5 sec
    transition: "color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Countdown Timer:</h2>
      <p style={timerStyle}>
        {seconds} second{seconds !== 1 ? "s" : ""} remaining
      </p>
    </div>
  );
}

export default CountdownTimer;
