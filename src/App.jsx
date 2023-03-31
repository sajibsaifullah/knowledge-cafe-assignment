import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <button type="button" class="btn btn-primary">
        Primary
      </button>
    </div>
  );
}

export default App;
