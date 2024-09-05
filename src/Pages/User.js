import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Import useNavigate
import UserDetails from '../Components/UserDetails';
import AddTaskForm from '../Components/AddTaskForm';
import EditUserForm from '../Components/EditUserForm';

function User() {
  const location = useLocation();
  const navigate = useNavigate();  // Initialize navigate function

  // Memoize the user object
  const user = useMemo(() => {
    return location.state?.customer || location.state?.prospect || location.state?.contact || {};
  }, [location.state]);

  const [tasks, setTasks] = useState(user.tasks || []);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({ ...user });

  useEffect(() => {
    if (user.tasks) {
      setTasks(user.tasks);
    }
  }, [user.tasks]);

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
      {/* Back button */}
      <button className="btn btn-light mt-2" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      {isEditing ? (
        <EditUserForm userData={userData} onSave={handleSave} />
      ) : (
        <>
          <button className="btn btn-secondary mt-2" onClick={() => setIsEditing(true)}>Edit</button>
          <UserDetails userData={{ ...userData, tasks }} />
          <AddTaskForm onAddTask={handleAddTask} />
        </>
      )}
      
    </div>
  );
}

export default User;
