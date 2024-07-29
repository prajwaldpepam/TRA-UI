import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";
import Login from "./components/Login2";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Admin /> */}
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          {/* <Route path='/' element={<Sidebar />} /> */}
        </Routes>
          <Login />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
