import React from "react";
import "./App.css";
import Form1 from "./components/Form1";
import "antd/dist/antd.css";
import Form2 from "./components/Form2";
import WeatherApp1 from "./components/WeatherApp1";

function App() {
  return (
    <div>
      <Form1 />
      <Form2 />
      <WeatherApp1 />
    </div>
  );
}

export default App;
