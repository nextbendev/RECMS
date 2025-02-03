import React, { useContext, useState, useEffect } from 'react';
import Select from 'react-select'; // Import React-Select
import { ContactContext } from '../contexts/ContactsContext';

function AddTaskForm({ onAddTask, contactId, defaultTaskType }) {
  const { contacts } = useContext(ContactContext);
  const [taskType, setTaskType] = useState('call');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    if (defaultTaskType) {
      setTaskType(defaultTaskType);
    }
  }, [defaultTaskType]);

  // Convert contacts into react-select format: { value, label }
  const contactOptions = contacts.map((contact) => ({
    value: contact.id,
    label: `${contact.name} - ${contact.email}`,
  }));

  useEffect(() => {
    if (contactId) {
      const preselectedContact = contactOptions.find((option) => option.value === contactId);
      setSelectedContact(preselectedContact || null);
    }
  }, [contactId, contactOptions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({
      taskType,
      taskDescription,
      dueDate,
      contactId: selectedContact ? selectedContact.value : '',
    });
    setTaskType('call');
    setTaskDescription('');
    setDueDate('');
    setSelectedContact(null);
    setTaskStatus('open');
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4 mb-4 bg-light shadow-sm rounded">
      <h4 className="mb-3 text-center">Add New Task</h4>

      <div className="row">
        {/* Task Type */}
        <div className="col-md-6 mb-3">
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

        {/* Due Date */}
        <div className="col-md-6 mb-3">
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

        {/* Task Description */}
        <div className="col-md-6 mb-3">
          <label htmlFor="taskDescription" className="form-label">Task Description</label>
          <textarea
            className="form-control"
            id="taskDescription"
            rows="2"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>

        {/* Contact Selector (Searchable Dropdown) */}
        {!contactId && (
          <div className="col-md-6 mb-3">
            <label className="form-label">Contact</label>
            <Select
              options={contactOptions}
              value={selectedContact}
              onChange={setSelectedContact}
              placeholder="Search and select a contact..."
              isSearchable
              className="form-control p-0"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button type="submit" className="btn btn-primary w-50">Add Task</button>
      </div>
    </form>
  );
}

export default AddTaskForm;
