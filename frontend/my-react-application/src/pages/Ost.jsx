import { useEffect, useState } from "react";

function Homeland() {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/system-info")
      .then((res) => res.json())
      .then((data) => setSystemInfo(data));
  }, []);

  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "rgba(52, 52, 77, 1)",
    color: "#F0F0F0",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#FFCC00",
    fontSize: "32px",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    fontSize: "22px",
    color: "#00FFAA",
    marginTop: "20px",
    marginBottom: "10px",
    borderBottom: "2px solid #FFCC00",
    display: "inline-block",
    paddingBottom: "4px",
  };

  const infoStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "8px",
  };

  const preStyle = {
    backgroundColor: "#2E2E40",
    padding: "15px",
    borderRadius: "8px",
    overflowX: "auto",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Use of Node.js OS Module 🖥️</h1>
      {systemInfo ? (
        <div>
          <h2 style={subHeadingStyle}>System Information</h2>
          <p style={infoStyle}><b>Hostname:</b> {systemInfo.hostname}</p>
          <p style={infoStyle}><b>Platform:</b> {systemInfo.platform} ({systemInfo.arch})</p>
          <p style={infoStyle}><b>OS Release:</b> {systemInfo.release}</p>
          <p style={infoStyle}><b>CPU:</b> {systemInfo.cpuModel} ({systemInfo.cpuCores} cores, {systemInfo.cpuSpeed})</p>
          <p style={infoStyle}><b>Total Memory:</b> {systemInfo.totalMem}</p>
          <p style={infoStyle}><b>Free Memory:</b> {systemInfo.freeMem}</p>
          <p style={infoStyle}><b>System Uptime:</b> {systemInfo.uptime}</p>
          <p style={infoStyle}><b>Home Directory:</b> {systemInfo.homeDir}</p>
          <p style={infoStyle}><b>Temp Directory:</b> {systemInfo.tempDir}</p>
          <p style={infoStyle}><b>Load Average:</b> {systemInfo.loadAverage.join(", ")}</p>
          <p style={infoStyle}><b>User:</b> {systemInfo.userInfo.username}</p>

          <h3 style={subHeadingStyle}>Network Interfaces</h3>
          <pre style={preStyle}>{JSON.stringify(systemInfo.networkInterfaces, null, 2)}</pre>
        </div>
      ) : (
        <p style={{ textAlign: "center", fontSize: "20px", marginTop: "20px" }}>Loading system info...</p>
      )}
    </div>
  );
}

export default Homeland;
