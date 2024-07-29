import React from 'react';
import './Admin.css';

const Admin: React.FC = () => {
  return (
    <div className='admin-container'>
      <div className='sidebar'>
        <a className='active' href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className='content'>
        <h2>Responsive Sidebar Example</h2>
        <p>This example uses media queries to transform the sidebar into a top navigation bar when the screen size is 700px or less.</p>
        <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
        <h3>Resize the browser window to see the effect.</h3>
      </div>
    </div>
  );
}

export default Admin;
