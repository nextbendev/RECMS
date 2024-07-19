// src/Components/AddTaskForm.js
import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [taskType, setTaskType] = useState('call');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ taskType, taskDescription, dueDate });
    setTaskType('call');
    setTaskDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label htmlFor="taskType" className="form-label">Task Type</label>
        <select
          className="form-control"
          id="taskType"
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          required
        >
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="appointment">Appointment</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="taskDescription" className="form-label">Task Description</label>
        <input
          type="text"
          className="form-control"
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
