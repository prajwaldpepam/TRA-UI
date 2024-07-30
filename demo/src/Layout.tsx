import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./components/Login";
import Registration from "./components/Registration";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="app">
        <div className="background">
          <div className="overlay">
            <div className="left-container">
              <h2>"THE GOAL OF LIFE IS LIVING IN AGREEMENT WITH NATURE"</h2>
            </div>
            <div className="right-container">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
