import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Blogs from "./components/Home/Blogs/Blogs";

function App() {

  return (
    <div className="App">
      <Home></Home>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
