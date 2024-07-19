// src/Pages/Tasks.js
import React from 'react';

function Tasks() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Tasks</h1>
        <button className="btn btn-primary">Notifications <span className="badge bg-secondary">4</span></button>
      </div>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white">
              High Urgency
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Task 1</li>
                <li className="list-group-item">Task 2</li>
                <li className="list-group-item">Task 3</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card border-warning">
            <div className="card-header bg-warning text-white">
              Medium Urgency
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Task 4</li>
                <li className="list-group-item">Task 5</li>
                <li className="list-group-item">Task 6</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card border-success">
            <div className="card-header bg-success text-white">
              Low Urgency
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Task 7</li>
                <li className="list-group-item">Task 8</li>
                <li className="list-group-item">Task 9</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
