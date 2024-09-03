// src/Pages/User.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserDetails from '../Components/UserDetails';
import AddTaskForm from '../Components/AddTaskForm';
import EditUserForm from '../Components/EditUserForm';

function User() {
  const location = useLocation();
  const user = location.state?.contact || location.state?.prospect || {};  // Ensure user is defined


  const [tasks, setTasks] = useState(user.tasks || []);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({ ...user });

  useEffect(() => {
    if (user.tasks) {
      setTasks(user.tasks);
    }
  }, [user]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleSave = (updatedUserData) => {
    setUserData(updatedUserData);
    setIsEditing(false);
    // Save the updated data to the database if necessary
  };

  return (
    <div>
      {isEditing ? (
        <EditUserForm userData={userData} onSave={handleSave} />
      ) : (
        <>
          <button className="btn btn-secondary mt-2 " onClick={() => setIsEditing(true)}>Edit</button>
          <UserDetails userData={{ ...userData, tasks }} />
        </>
      )}
      <AddTaskForm onAddTask={handleAddTask} />
      
    </div>
  );
}

export default User;
