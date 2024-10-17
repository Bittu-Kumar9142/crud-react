import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read"
import Update from "./components/Update";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Create />} />
      <Route path="/read" element={ <Read/>} />
      <Route path="/update" element={ <Update/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
