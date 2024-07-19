// src/Pages/Dashboard.js
import React from 'react';

function Dashboard() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <button className="btn btn-primary w-100 h-100 p-5">Button 1</button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <button className="btn btn-secondary w-100 h-100 p-5">Button 2</button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <button className="btn btn-success w-100 h-100 p-5">Button 3</button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <button className="btn btn-danger w-100 h-100 p-5">Button 4</button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <button className="btn btn-warning w-100 h-100 p-5">Button 5</button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <button className="btn btn-info w-100 h-100 p-5">Button 6</button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <button className="btn btn-light w-100 h-100 p-5">Button 7</button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <button className="btn btn-dark w-100 h-100 p-5">Button 8</button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <button className="btn btn-outline-primary w-100 h-100 p-5">Button 9</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
