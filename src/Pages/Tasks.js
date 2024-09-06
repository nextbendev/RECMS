import React, { useState, useContext, useEffect } from 'react';
import AddTaskForm from '../Components/AddTaskForm';
import { ContactContext } from '../contexts/ContactsContext'; // Import the context

function Tasks() {
  const { contacts } = useContext(ContactContext); // Access contacts from the context
  const [tasks, setTasks] = useState([]);

  // Extract all tasks from contacts and combine them into a single array
  useEffect(() => {
    const allTasks = contacts.reduce((acc, contact) => {
      if (contact.tasks && contact.tasks.length > 0) {
        // Add a contactId to tasks and include the contact name
        const contactTasks = contact.tasks.map(task => ({
          ...task,
          contactId: contact.id,
          contactName: contact.name, // Add contact's name for display
        }));
        return [...acc, ...contactTasks];
      }
      return acc;
    }, []);
    setTasks(allTasks);
  }, [contacts]);

  const handleAddTask = (newTask) => {
    const newTaskWithId = { ...newTask, taskId: tasks.length + 1 }; // Simulate taskId increment
    setTasks((prevTasks) => [...prevTasks, newTaskWithId]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.taskId !== taskId));
  };

  const handleEditTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.taskId === taskId ? { ...updatedTask, taskId } : task
    );
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === taskId ? { ...task, status: 'closed' } : task
      )
    );
  };

  const filterTasksByUrgency = (urgency) => {
    return tasks.filter((task) => task.urgency === urgency && task.status === 'open');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {['high', 'medium', 'low'].map((urgency) => (
          <div
            className={`col-lg-4 col-md-6 col-sm-12 mb-4`} // Use `col-lg-4` for large screens, `col-md-6` for medium screens, `col-sm-12` for tablets/mobiles
            key={urgency}
          >
            <div className={`card border-${urgency === 'high' ? 'danger' : urgency === 'medium' ? 'warning' : 'success'}`}>
              <div className={`card-header bg-${urgency === 'high' ? 'danger' : urgency === 'medium' ? 'warning' : 'success'} text-white`}>
                {`${urgency.charAt(0).toUpperCase() + urgency.slice(1)} Urgency`}
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {filterTasksByUrgency(urgency).map((task) => (
                    <li key={task.taskId} className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          <strong>{task.taskType}</strong> ({task.contactName}): {task.taskDescription} - {task.dueDate}
                        </span>
                        <div className="d-flex">
                          <button
                            className="btn btn-success btn-sm mx-1"
                            onClick={() => handleCompleteTask(task.taskId)}
                          >
                            ✓
                          </button>
                          <button
                            className="btn btn-warning btn-sm mx-1"
                            onClick={() =>
                              handleEditTask(task.taskId, {
                                taskType: task.taskType,
                                taskDescription: prompt('Edit Task', task.taskDescription) || task.taskDescription,
                                dueDate: task.dueDate,
                                urgency: task.urgency,
                                taskId: task.taskId, // Preserve taskId
                                contactName: task.contactName, // Preserve contactName
                              })
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm mx-1"
                            onClick={() => handleDeleteTask(task.taskId)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default Tasks;
