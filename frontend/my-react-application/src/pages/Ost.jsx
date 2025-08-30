import { useEffect, useState } from "react";

function Homeland() {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/system-info")
      .then((res) => res.json())
      .then((data) => setSystemInfo(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Use of OS Module </h1>
      {systemInfo ? (
       <div style={{ padding: "20px" }}>
      <h1>System Information 🖥️</h1>
      <p><b>Hostname:</b> {systemInfo.hostname}</p>
      <p><b>Platform:</b> {systemInfo.platform} ({systemInfo.arch})</p>
      <p><b>OS Release:</b> {systemInfo.release}</p>
      <p><b>CPU:</b> {systemInfo.cpuModel} ({systemInfo.cpuCores} cores, {systemInfo.cpuSpeed})</p>
      <p><b>Total Memory:</b> {systemInfo.totalMem}</p>
      <p><b>Free Memory:</b> {systemInfo.freeMem}</p>
      <p><b>System Uptime:</b> {systemInfo.uptime}</p>
      <p><b>Home Directory:</b> {systemInfo.homeDir}</p>
      <p><b>Temp Directory:</b> {systemInfo.tempDir}</p>
      <p><b>Load Average:</b> {systemInfo.loadAverage.join(", ")}</p>
      <p><b>User:</b> {systemInfo.userInfo.username}</p>

      <h3>Network Interfaces:</h3>
      <pre>{JSON.stringify(systemInfo.networkInterfaces, null, 2)}</pre>
    </div>
      ) : (
        <p>Loading system info...</p>
      )}
    </div>
  );
}

export default Homeland;
