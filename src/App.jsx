import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Faq from "./components/Faq/Faq";
function App() {

  return (
    <div className="App">
      <Home></Home>
      <Blogs></Blogs>
      <Faq></Faq>
    </div>
  );
}

export default App;
