import React, { useState } from 'react';
import AddTaskForm from '../Components/AddTaskForm';

function Tasks() {
  const [tasks, setTasks] = useState([
    { taskId: 1, status: 'open',  taskType: 'call', taskDescription: 'Follow up with client on offer', dueDate: '2024-09-05', urgency: 'high' },
    { taskId: 2, status: 'open',  taskType: 'email', taskDescription: 'Send property details to buyer', dueDate: '2024-09-06', urgency: 'medium' },
    { taskId: 3, status: 'open',  taskType: 'appointment', taskDescription: 'Schedule property viewing', dueDate: '2024-09-07', urgency: 'low' },
    { taskId: 4, status: 'open',  taskType: 'text', taskDescription: 'Confirm appointment time with client', dueDate: '2024-09-08', urgency: 'medium' },
    { taskId: 5, status: 'open',  taskType: 'call', taskDescription: 'Discuss financing options with lender', dueDate: '2024-09-09', urgency: 'high' },
    { taskId: 6, status: 'open',  taskType: 'email', taskDescription: 'Send final contract to seller', dueDate: '2024-09-10', urgency: 'low' },
    { taskId: 7, status: 'open',  taskType: 'appointment', taskDescription: 'Meeting with title company', dueDate: '2024-09-11', urgency: 'medium' },
    { taskId: 8, status: 'open',  taskType: 'call', taskDescription: 'Update buyer on escrow progress', dueDate: '2024-09-12', urgency: 'high' },
    { taskId: 9, status: 'open',  taskType: 'text', taskDescription: 'Reminder to submit inspection report', dueDate: '2024-09-13', urgency: 'low' },
    { taskId: 10, status: 'open',  taskType: 'email', taskDescription: 'Request documents from seller', dueDate: '2024-09-14', urgency: 'medium' },
    { taskId: 11, status: 'open',  taskType: 'appointment', taskDescription: 'Walkthrough of new listing', dueDate: '2024-09-15', urgency: 'low' },
    { taskId: 12, status: 'open',  taskType: 'call', taskDescription: 'Discuss final offer with buyer', dueDate: '2024-09-16', urgency: 'high' },
    { taskId: 13, status: 'open',  taskType: 'email', taskDescription: 'Send updated listing to all clients', dueDate: '2024-09-17', urgency: 'medium' },
    { taskId: 14, status: 'open',  taskType: 'appointment', taskDescription: 'Open house event planning', dueDate: '2024-09-18', urgency: 'low' },
    { taskId: 15, status: 'open',  taskType: 'text', taskDescription: 'Confirm contract signature from buyer', dueDate: '2024-09-19', urgency: 'high' },
    { taskId: 16, status: 'open',  taskType: 'call', taskDescription: 'Review inspection report with seller', dueDate: '2024-09-20', urgency: 'medium' },
    { taskId: 17, status: 'open',  taskType: 'email', taskDescription: 'Send list of repairs to buyer', dueDate: '2024-09-21', urgency: 'low' },
    { taskId: 18, status: 'open',  taskType: 'appointment', taskDescription: 'Closing meeting with buyer', dueDate: '2024-09-22', urgency: 'high' },
    { taskId: 19, status: 'open',  taskType: 'text', taskDescription: 'Remind seller to prepare documents for closing', dueDate: '2024-09-23', urgency: 'medium' },
    { taskId: 20, status: 'open',  taskType: 'email', taskDescription: 'Follow up on payment for closing', dueDate: '2024-09-24', urgency: 'low' }
  ]);

  const handleAddTask = (newTask) => {
    // Assume the backend assigns a taskId when saved
    const newTaskWithId = { ...newTask, taskId: tasks.length + 1 };  // Simulate taskId increment
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
          <div className={`col-md-4 mb-4`} key={urgency}>
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
                          {task.taskType}: {task.taskDescription} - {task.dueDate}
                        </span>
                        <div className="d-flex justify-content-between">
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
                                taskId: task.taskId  // Preserve taskId
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
