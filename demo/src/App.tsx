import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import "./App.css";
import Layout from "./Layout";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
