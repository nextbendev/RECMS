import React, { useState } from "react";
import { FaHome, FaUsers, FaTasks, FaCalendarAlt, FaBell, FaChartLine, FaPlus } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Calendar Styling
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import '../Stylesheets/Dashboard.css';


function Dashboard() {
  const [tasks] = useState([
    {
      id: 1,
      taskType: "call",
      taskDescription: "Call with John Doe",
      dueDate: "2025-02-06", // Example date
      urgency: "high",
    },
    {
      id: 2,
      taskType: "appointment",
      taskDescription: "Property tour at 123 Main St.",
      dueDate: "2025-02-07", // Example date
      urgency: "medium",
    },
    {
      id: 3,
      taskType: "email",
      taskDescription: "Follow-up email to Sarah Connor",
      dueDate: "2025-02-08", // Example date
      urgency: "low",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalDate, setModalDate] = useState(null);
  const [modalTasks, setModalTasks] = useState([]);

  // Function to render task markers on the calendar
  const renderTaskMarkers = ({ date, view }) => {
    if (view === "month") {
      const taskForDate = tasks.find(
        (task) => new Date(task.dueDate).toDateString() === date.toDateString()
      );

      if (taskForDate) {
        return (
          <div
            style={{
              backgroundColor:
                taskForDate.urgency === "high"
                  ? "red"
                  : taskForDate.urgency === "medium"
                  ? "orange"
                  : "green",
              color: "white",
              borderRadius: "50%",
              width: "8px",
              height: "8px",
              margin: "0 auto",
            }}
          />
        );
      }
    }
    return null;
  };

  // Handle task click (open modal with tasks for that date)
  const handleTaskClick = (date) => {
    const tasksForDate = tasks.filter(
      (task) => new Date(task.dueDate).toDateString() === date.toDateString()
    );

    if (tasksForDate.length > 0) {
      setModalDate(date);
      setModalTasks(tasksForDate);
      setShowModal(true);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Main Dashboard Section */}
        <div className="col-lg-9">
          {/* Overview Cards */}
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card text-white bg-primary shadow-sm p-3">
                <h6>Total Listings</h6>
                <h3>24</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-success shadow-sm p-3">
                <h6>New Leads</h6>
                <h3>8</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-warning shadow-sm p-3">
                <h6>Pending Tasks</h6>
                <h3>{tasks.length}</h3>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card mt-3 p-3 shadow-sm">
            <h5>Quick Actions</h5>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/form" state={{ role: "re" }} className="btn btn-primary">
                <FaPlus className="me-1" /> Input Listing
              </Link>
              <Link to="/form" state={{ role: "contact" }} className="btn btn-success">
                <FaPlus className="me-1" /> Add Contact
              </Link>
              <Link to="/tasks" state={{ taskType: "appointment" }} className="btn btn-warning">
                <FaPlus className="me-1" /> Schedule Meeting
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card mt-3 p-3 shadow-sm">
            <h5>Recent Activity</h5>
            <ul className="list-group">
              <li className="list-group-item">🏠 New Listing: "Luxury Villa in LA"</li>
              <li className="list-group-item">📞 Lead from John Doe - Requested a Call</li>
              <li className="list-group-item">📩 New Message: "Is the property still available?"</li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-lg-3">
          {/* Notifications */}
          <div className="card mb-3 shadow-sm">
            <div className="card-header bg-danger text-white">
              <FaBell className="me-2" /> Notifications
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>🔔 New property inquiry received</li>
                <li>📩 2 unread messages</li>
                <li>🏠 Offer received on "Luxury Condo"</li>
              </ul>
            </div>
          </div>

          {/* Calendar */}
          <div className="card mb-3 shadow-sm">
            <div className="card-header bg-secondary text-white">
              <FaCalendarAlt className="me-2" /> Appointments
            </div>
            <div className="card-body">
            <Calendar
              tileContent={renderTaskMarkers}
              onClickDay={handleTaskClick}
              formatMonthYear={(locale, date) => date.toLocaleString('en-US', { month: 'short' })}
            />

            </div>
          </div>

          {/* Market Trends */}
          <div className="card shadow-sm">
            <div className="card-header bg-info text-white">
              <FaChartLine className="me-2" /> Market Trends
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>🏡 Home prices increased by 5% in Q3</li>
                <li>📉 Interest rates expected to rise next quarter</li>
                <li>💰 More buyers investing in vacation homes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Modal for Task Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tasks for {modalDate?.toDateString()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalTasks.length > 0 ? (
            <ul className="list-group">
              {modalTasks.map((task) => (
                <li key={task.id} className="list-group-item">
                  <strong>{task.taskType.toUpperCase()}:</strong> {task.taskDescription}
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks scheduled for this day.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
