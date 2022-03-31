import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
const App = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
