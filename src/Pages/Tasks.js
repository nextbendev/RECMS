import React, { useState, useContext, useEffect, useMemo } from 'react';
import AddTaskForm from '../Components/AddTaskForm';
import { useLocation } from 'react-router-dom';
import { ContactContext } from '../contexts/ContactsContext';
import '../Stylesheets/Tasks.css';

function Tasks() {
  const { contacts } = useContext(ContactContext);
  const [tasks, setTasks] = useState([]);
  const [collapsedSections, setCollapsedSections] = useState({
    high: false,
    medium: false,
    low: false,
    closed: false,
  });
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editTask, setEditTask] = useState({ taskType: '', taskDescription: '', dueDate: '', urgency: 'medium' });
  const location = useLocation();
  const taskTypeFromState = location.state?.taskType || ''; // Default to empty if none is passed


  // Load all tasks from contacts
  useEffect(() => {
    const allTasks = contacts.reduce((acc, contact) => {
      if (contact.tasks && contact.tasks.length > 0) {
        const contactTasks = contact.tasks.map(task => ({
          ...task,
          contactId: contact.id,
          contactName: contact.name,
        }));
        return [...acc, ...contactTasks];
      }
      return acc;
    }, []);
    setTasks(allTasks);
  }, [contacts]);

  const handleAddTask = (newTask) => {
    const newTaskWithId = { ...newTask, taskId: tasks.length + 1, status: 'open' };
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

  // ✅ Use `useMemo` to improve performance
  const filteredTasks = useMemo(() => ({
    high: tasks.filter((task) => task.urgency === 'high' && task.status === 'open'),
    medium: tasks.filter((task) => task.urgency === 'medium' && task.status === 'open'),
    low: tasks.filter((task) => task.urgency === 'low' && task.status === 'open'),
    closed: tasks.filter((task) => task.status === 'closed'),
  }), [tasks]);

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const openEditModal = (task) => {
    setEditTask(task);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditTask({ taskType: '', taskDescription: '', dueDate: '', urgency: 'medium' });
  };

  const saveEditedTask = () => {
    handleEditTask(editTask.taskId, editTask);
    closeEditModal();
  };

  return (
    <div className="container mt-4">
      <AddTaskForm onAddTask={handleAddTask} defaultTaskType={taskTypeFromState} />
      <div className="row">
        {['high', 'medium', 'low'].map((urgency) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={urgency}>
            <div className={`card border-${urgency === 'high' ? 'danger' : urgency === 'medium' ? 'warning' : 'success'}`}>
              <div className={`card-header bg-${urgency === 'high' ? 'danger' : urgency === 'medium' ? 'warning' : 'success'} text-white d-flex justify-content-between align-items-center`}>
                <span>{`${urgency.charAt(0).toUpperCase() + urgency.slice(1)} Urgency`}</span>
                <button className="btn btn-sm btn-light" onClick={() => toggleSection(urgency)}>
                  {collapsedSections[urgency] ? '▼' : '▲'}
                </button>
              </div>
              {!collapsedSections[urgency] && (
                <div className="card-body">
                  {filteredTasks[urgency].length === 0 ? (
                    <p className="text-center text-muted">No tasks available</p>
                  ) : (
                    <ul className="list-group list-group-flush">
                      {filteredTasks[urgency].map((task) => (
                        <li key={task.taskId} className="list-group-item">
                          <div className="d-flex justify-content-between align-items-center">
                            <span>
                              <strong>{task.taskType}</strong> ({task.contactName}): {task.taskDescription} - {task.dueDate}
                            </span>
                            <div className="d-flex">
                              <button className="btn btn-success btn-sm mx-1" onClick={() => handleCompleteTask(task.taskId)} title="Mark Complete">✓</button>
                              <button className="btn btn-warning btn-sm mx-1" onClick={() => openEditModal(task)} title="Edit Task">✎</button>
                              <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDeleteTask(task.taskId)} title="Delete Task">X</button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Closed Tasks Section */}
        <div className="col-12 mt-3">
          <div className="card border-secondary">
            <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
              <span>Closed Tasks</span>
              <button className="btn btn-sm btn-light" onClick={() => toggleSection('closed')}>
                {collapsedSections.closed ? '▼' : '▲'}
              </button>
            </div>
            {!collapsedSections.closed && (
              <div className="card-body">
                {filteredTasks.closed.length === 0 ? (
                  <p className="text-center text-muted">No closed tasks</p>
                ) : (
                  <ul className="list-group list-group-flush">
                    {filteredTasks.closed.map((task) => (
                      <li key={task.taskId} className="list-group-item">
                        <strong>{task.taskType}</strong> ({task.contactName}): {task.taskDescription} - {task.dueDate}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Task Modal */}
      {isEditModalOpen && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button type="button" className="btn-close" onClick={closeEditModal}></button>
              </div>
              <div className="modal-body">
                <label className="form-label">Task Description</label>
                <input type="text" className="form-control" value={editTask.taskDescription} onChange={(e) => setEditTask({ ...editTask, taskDescription: e.target.value })} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeEditModal}>Cancel</button>
                <button className="btn btn-primary" onClick={saveEditedTask}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
