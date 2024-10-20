// src/Dashboard.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'; // Import Dashboard CSS

function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="users">Users</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
      </aside>
      <main className="content">
        <h1>Welcome to the Dashboard!</h1>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
