import React, { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import { useGlobalState } from '../contexts/GlobalContext';
import { ContactContext } from '../contexts/ContactsContext';

function AddTaskForm({ onAddTask, contactId, defaultTaskType }) {
  const { state } = useGlobalState();
  const contacts = state.contacts;
  

  const [taskType, setTaskType] = useState(defaultTaskType || 'call');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  
  const contactOptions = (contacts || []).map((contact) => ({
    value: contact.id,
    label: `${contact.name} - ${contact.email}`,
  }));
  

  // ✅ Only re-run when `contactId` changes
  useEffect(() => {
    if (contactId) {
      console.log("task use effect");
      const preselectedContact = contactOptions.find((option) => option.value === contactId);
      setSelectedContact(preselectedContact || null);
    }
  }, [contactId]);  // ✅ Removed `contactOptions` from dependencies

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({
      taskType,
      taskDescription,
      dueDate,
      contactId: selectedContact ? selectedContact.value : '',
    });
    setTaskType(defaultTaskType || 'call');
    setTaskDescription('');
    setDueDate('');
    setSelectedContact(null);
    console.log("submit", taskType, selectedContact, dueDate, taskDescription )
  };

  return (
    <form onSubmit={handleSubmit} className="container bg-light shadow-sm rounded p-2">
      <h6 className="text-center mb-2">Create Task</h6>

      <div className="row g-1">
        {/* Task Type */}
        <div className="col-md-4">
          <select
            className="form-select form-select-sm"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            required
          >
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="appointment">Appointment</option>
            <option value="closing">Closing</option>
            <option value="inspection">Inspection</option>
            <option value="dueDiligence">Due Diligence Over</option>
          </select>
        </div>

        {/* Due Date */}
        <div className="col-md-4">
          <input
            type="date"
            className="form-control form-control-sm"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        {/* Contact Selector */}
        {!contactId && (
          <div className="col-md-4">
            <Select
              options={contactOptions}
              value={selectedContact}
              onChange={setSelectedContact}
              placeholder="Select contact..."
              isSearchable
              classNamePrefix="react-select"
              styles={{
                control: (base) => ({ ...base, height: '30px', minHeight: '30px' }),
              }}
            />
          </div>
        )}

        {/* Task Description */}
        <div className="col-12">
          <textarea
            className="form-control form-control-sm"
            style={{ height: '50px', resize: 'none' }}
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-2">
        <button type="submit" className="btn btn-primary btn-sm px-3 py-1">Add</button>
      </div>
    </form>
  );
}

export default AddTaskForm;
