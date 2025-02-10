import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function UserDetails({ userData, setUserData }) {
  console.log("userdata", userData);

  const [editingTask, setEditingTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const renderField = (label, value) => {
    if (value) {
      return (
        <div className="col-md-6">
          <label className="form-label">{label}</label>
          <p className="form-control-plaintext">
            {Array.isArray(value) ? value.join(", ") : value}
          </p>
        </div>
      );
    }
    return null;
  };

  // Handle Task Updates (Edit & Close)
  const handleTaskUpdate = (taskId, updatedTask) => {
    setUserData((prevUser) => ({
      ...prevUser,
      tasks: prevUser.tasks.map((task) =>
        task.taskId === taskId ? updatedTask : task
      ),
    }));
    setEditingTask(null);
    setShowModal(false);
  };

  // Handle Task Deletion
  const handleTaskDelete = (taskId) => {
    setUserData((prevUser) => ({
      ...prevUser,
      tasks: prevUser.tasks.filter((task) => task.taskId !== taskId),
    }));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">User Details</h1>

      {/* User Information */}
      <div className="row mb-3">
        {renderField("Full Name", userData.name)}
        {renderField("Email", userData.email)}
        {renderField("Phone", userData.phone)}
        {renderField("Mailing Address", `${userData.mailAddress || ''}, ${userData.mailCity || ''}, ${userData.mailSt || ''} ${userData.mailZip || ''}`.trim())}
        {renderField("Address of Interest", userData.interestAddress)}
        {renderField("Time Frame", userData.timeFrame)}
        {renderField("Financing Status", userData.financingStatus)}
        {renderField("Offer Amount", userData.offer)}
        {renderField("Due Diligence", userData.dueDiligence)}
        {renderField("Days for Closing", userData.daysForClosing)}
        {renderField("Title Company", userData.titleCompany)}
        {renderField("Escrow Amount", userData.escrowAmount)}
        {renderField("Payment Type", userData.paymentType)}
        {renderField("Property Type", userData.propertyType)}
        {renderField("Future Use", userData.futureUse)}
        {renderField("Budget", userData.budget)}
        {renderField("Location", userData.location)}
        {renderField("Wants/Needs", userData.wantsNeeds)}
        {renderField("Commission", userData.commission)}
        {renderField("Seller A Email", userData.sellerA)}
        {renderField("Seller B Email", userData.sellerB)}
        {renderField("Additional Notes", userData.additionalNotes)}
      </div>

      {/* User Tasks Section */}
      <h2 className="mt-4">Tasks</h2>
      {userData.tasks && userData.tasks.length > 0 ? (
        <div className="row">
          {/* Grouping tasks by urgency */}
          {["high", "medium", "low"].map((urgency) => {
            const filteredTasks = userData.tasks.filter(
              (task) => task.urgency === urgency && task.status === "open"
            );
            if (filteredTasks.length === 0) return null;

            return (
              <div className="col-md-4" key={urgency}>
                <div
                  className={`card shadow-sm mb-3 border-${
                    urgency === "high"
                      ? "danger"
                      : urgency === "medium"
                      ? "warning"
                      : "success"
                  }`}
                >
                  <div
                    className={`card-header text-white bg-${
                      urgency === "high"
                        ? "danger"
                        : urgency === "medium"
                        ? "warning"
                        : "success"
                    }`}
                  >
                    {urgency.charAt(0).toUpperCase() + urgency.slice(1)} Urgency
                  </div>
                  <ul className="list-group list-group-flush">
                    {filteredTasks.map((task) => (
                      <li key={task.taskId} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>{task.taskType.toUpperCase()}:</strong> {task.taskDescription} <br />
                          <small className="text-muted">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                          </small>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-success me-1" onClick={() => handleTaskUpdate(task.taskId, { ...task, status: "closed" })}>
                            ✓
                          </button>
                          <button className="btn btn-sm btn-warning me-1" onClick={() => { setEditingTask(task); setShowModal(true); }}>
                            ✎
                          </button>
                          <button className="btn btn-sm btn-danger" onClick={() => handleTaskDelete(task.taskId)}>
                            X
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-muted">No open tasks assigned.</p>
      )}

      {/* Task Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingTask && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTaskUpdate(editingTask.taskId, editingTask);
              }}
            >
              <label className="form-label">Task Type</label>
              <select
                className="form-control mb-2"
                value={editingTask.taskType}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, taskType: e.target.value })
                }
              >
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="appointment">Appointment</option>
              </select>

              <label className="form-label">Task Description</label>
              <input
                type="text"
                className="form-control mb-2"
                value={editingTask.taskDescription}
                onChange={(e) =>
                  setEditingTask({
                    ...editingTask,
                    taskDescription: e.target.value,
                  })
                }
              />

              <label className="form-label">Due Date</label>
              <input
                type="date"
                className="form-control mb-2"
                value={editingTask.dueDate}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, dueDate: e.target.value })
                }
              />

              <label className="form-label">Urgency</label>
              <select
                className="form-control mb-2"
                value={editingTask.urgency}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, urgency: e.target.value })
                }
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Save Changes
              </button>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserDetails;
