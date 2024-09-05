import React, { useState } from 'react';
import AddTaskForm from '../Components/AddTaskForm';

function Tasks() {
  const [tasks, setTasks] = useState([
    { taskType: 'call', taskDescription: 'Task 1', dueDate: '2024-08-01', urgency: 'high' },
    { taskType: 'email', taskDescription: 'Task 2', dueDate: '2024-08-02', urgency: 'medium' },
    { taskType: 'appointment', taskDescription: 'Task 3', dueDate: '2024-08-03', urgency: 'low' },
  ]);

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const filterTasksByUrgency = (urgency) => {
    return tasks.filter((task) => task.urgency === urgency);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Tasks</h1>
        <button className="btn btn-primary">Notifications <span className="badge bg-secondary">4</span></button>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white">High Urgency</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {filterTasksByUrgency('high').map((task, index) => (
                  <li key={index} className="list-group-item">
                    {task.taskType}: {task.taskDescription} - {task.dueDate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-warning">
            <div className="card-header bg-warning text-white">Medium Urgency</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {filterTasksByUrgency('medium').map((task, index) => (
                  <li key={index} className="list-group-item">
                    {task.taskType}: {task.taskDescription} - {task.dueDate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-success">
            <div className="card-header bg-success text-white">Low Urgency</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {filterTasksByUrgency('low').map((task, index) => (
                  <li key={index} className="list-group-item">
                    {task.taskType}: {task.taskDescription} - {task.dueDate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default Tasks;
