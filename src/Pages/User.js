import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalState } from '../contexts/GlobalContext';
import UserDetails from '../Components/UserDetails';
import AddTaskForm from '../Components/AddTaskForm';
import EditUserForm from '../Components/EditUserForm';

function User() {
  const { id } = useParams(); 
  const { state } = useGlobalState();
  const navigate = useNavigate();

  

  // Get user from Global Context
  const user = state.contacts.find((contact) => contact.id === Number(id)) || {};

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(user);  // ✅ Fix: Prevent infinite state updates

  useEffect(() => {
    setUserData(user);
    console.log("use effect") // ✅ Updates userData only when `user` changes
  }, [user]);

  const handleAddTask = (newTask) => {
    setUserData((prevUser) => ({
      ...prevUser,
      tasks: [...(prevUser.tasks || []), newTask], // ✅ Ensure `tasks` is always an array
    }));
    console.log(" handle add task")
  };

  const handleSave = (updatedUserData) => {
    console.log("hande")
    setUserData(updatedUserData);
    setIsEditing(false);
  };

  if (!user.id) {
    console.log("if")
    return <p>Error: No contact found with ID {id}</p>;
  }

  return (
    <div>
      <button className="btn btn-light mt-2" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      {isEditing ? (
        <EditUserForm userData={userData} onSave={handleSave} />
      ) : (
        <>
          <button className="btn btn-secondary mt-2" onClick={() => setIsEditing(true)}>Edit</button>
          <UserDetails userData={{ ...userData }} setUserData={setUserData}  />
          <AddTaskForm onAddTask={handleAddTask} contactId={user.id} />
        </>
      )}
    </div>
  );
}

export default User;
