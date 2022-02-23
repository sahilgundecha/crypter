import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
