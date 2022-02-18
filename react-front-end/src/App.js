import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Rent from "./components/Rent";
import { Route, Routes } from "react-router-dom";
import Bags from "./components/categories/Bags";

function App() {
  return (
    <main className="App">
      <Navbar />
<Bags/>
      <Routes>
        <Route path="/rent" element={<Rent />}></Route>
      </Routes>
      
      <Routes>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </main>
  );
}

export default App;
