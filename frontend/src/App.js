import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch((err) => setStatus("API Error"));
  }, []);

  return (
    <div className="App">
      <h1>React Frontend</h1>
      <p>Backend API Status: {status}</p>
    </div>
  );
}

export default App;
