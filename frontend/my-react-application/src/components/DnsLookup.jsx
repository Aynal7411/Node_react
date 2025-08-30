import React, { useState } from "react";

function DnsLookup() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);

  const handleLookup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/lookup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domain }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🌐 DNS Lookup Tool for learning </h2>
      <form onSubmit={handleLookup}>
        <input
          type="text"
          placeholder="Enter domain (e.g. google.com)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "10px" }}>
          Lookup
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "20px", textAlign: "left", display: "inline-block" }}>
          <h3>🔎 Result:</h3>
          <p><strong>IP:</strong> {JSON.stringify(result.ip)}</p>
          <p><strong>MX:</strong> {JSON.stringify(result.mx)}</p>
          <p><strong>CNAME:</strong> {JSON.stringify(result.cname)}</p>
        </div>
      )}
    </div>
  );
}

export default DnsLookup;
