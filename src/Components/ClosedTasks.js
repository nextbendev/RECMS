import React, { useContext, useMemo } from 'react';
import { ContactContext } from '../contexts/ContactsContext';

function ClosedTasks() {
  const { contacts } = useContext(ContactContext);

  // ✅ Use `useMemo` for efficient filtering
  const closedTasks = useMemo(() => {
    return contacts.reduce((acc, contact) => {
      if (contact.tasks && contact.tasks.length > 0) {
        const completedTasks = contact.tasks
          .filter((task) => task.status === 'closed')
          .map((task) => ({
            ...task,
            contactId: contact.id,
            contactName: contact.name,
          }));
        return [...acc, ...completedTasks];
      }
      return acc;
    }, []);
  }, [contacts]);

  return (
    <div className="col-12 mt-3">
      <div className="card border-secondary">
        <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
          <span>Closed Tasks</span>
        </div>
        <div className="card-body" style={{ maxHeight: '250px', overflowY: 'auto' }}>
          {closedTasks.length === 0 ? (
            <p className="text-center text-muted">No closed tasks</p>
          ) : (
            <ul className="list-group list-group-flush">
              {closedTasks.slice(0, 10).map((task) => (
                <li key={task.taskId} className="list-group-item">
                  <strong>{task.taskType}</strong> ({task.contactName}): {task.taskDescription} - {task.dueDate}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClosedTasks;
