import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("Connecting...");

  useEffect(() => {
    axios.get("http://localhost:8080/api/test")
      .then(res => setMsg(res.data))
      .catch(err => {
        console.log("ERROR:", err);
        setMsg("Error");
      });
  }, []);

  return (
    <h1 style={{ marginTop: "50px", textAlign: "center" }}>
      {msg}
    </h1>
  );
}

export default App;
