import React, { useState } from "react";
import { FaInbox, FaPaperPlane, FaEnvelope, FaReply } from "react-icons/fa";

function Mailbox() {
  const [activeTab, setActiveTab] = useState("inbox");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [newMail, setNewMail] = useState({ to: "", subject: "", content: "" });

  // Dummy Emails
  const [inbox, setInbox] = useState([
    {
      id: 1,
      from: "johndoe@example.com",
      subject: "Meeting Reminder",
      content: "Don't forget our meeting tomorrow at 10 AM.",
      timestamp: "Yesterday",
    },
    {
      id: 2,
      from: "janesmith@example.com",
      subject: "Property Inquiry",
      content: "Can you provide more details about the house in Beverly Hills?",
      timestamp: "2 days ago",
    },
  ]);

  const [sent, setSent] = useState([
    {
      id: 3,
      to: "client@example.com",
      subject: "Property Details",
      content: "Here are the details for the property you were interested in.",
      timestamp: "Today",
    },
  ]);

  // Handle New Message Submission
  const handleSendMessage = () => {
    if (!newMail.to || !newMail.subject || !newMail.content) return;

    const message = {
      id: Date.now(),
      to: newMail.to,
      subject: newMail.subject,
      content: newMail.content,
      timestamp: "Just now",
    };

    setSent([message, ...sent]); // Add to Sent Messages
    setNewMail({ to: "", subject: "", content: "" }); // Reset input fields
    setActiveTab("sent"); // Switch to Sent tab
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-lg-3">
          <div className="list-group">
            <button
              className={`list-group-item list-group-item-action ${activeTab === "inbox" ? "active" : ""}`}
              onClick={() => setActiveTab("inbox")}
            >
              <FaInbox className="me-2" /> Inbox ({inbox.length})
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === "sent" ? "active" : ""}`}
              onClick={() => setActiveTab("sent")}
            >
              <FaPaperPlane className="me-2" /> Sent ({sent.length})
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === "compose" ? "active" : ""}`}
              onClick={() => setActiveTab("compose")}
            >
              <FaEnvelope className="me-2" /> Compose
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-lg-9">
          {/* Inbox Tab */}
          {activeTab === "inbox" && (
            <div className="card">
              <div className="card-header bg-primary text-white">Inbox</div>
              <div className="card-body" style={{ height: "400px", overflowY: "auto" }}>
                {inbox.length === 0 ? (
                  <p className="text-muted text-center">No messages in your inbox.</p>
                ) : (
                  inbox.map((msg) => (
                    <div
                      key={msg.id}
                      className="border-bottom p-2"
                      onClick={() => setSelectedMessage(msg)}
                      style={{ cursor: "pointer" }}
                    >
                      <strong>{msg.from}</strong> - {msg.subject}
                      <small className="text-muted d-block">{msg.timestamp}</small>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Sent Messages Tab */}
          {activeTab === "sent" && (
            <div className="card">
              <div className="card-header bg-secondary text-white">Sent Messages</div>
              <div className="card-body" style={{ height: "400px", overflowY: "auto" }}>
                {sent.length === 0 ? (
                  <p className="text-muted text-center">No sent messages.</p>
                ) : (
                  sent.map((msg) => (
                    <div
                      key={msg.id}
                      className="border-bottom p-2"
                      onClick={() => setSelectedMessage(msg)}
                      style={{ cursor: "pointer" }}
                    >
                      <strong>To: {msg.to}</strong> - {msg.subject}
                      <small className="text-muted d-block">{msg.timestamp}</small>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Message Details View */}
          {selectedMessage && (
            <div className="card mt-3">
              <div className="card-header bg-info text-white">Message Details</div>
              <div className="card-body">
                <p><strong>From:</strong> {selectedMessage.from || `You (${selectedMessage.to})`}</p>
                <p><strong>Subject:</strong> {selectedMessage.subject}</p>
                <p>{selectedMessage.content}</p>
                <button className="btn btn-outline-primary" onClick={() => setActiveTab("compose")}>
                  <FaReply className="me-1" /> Reply
                </button>
              </div>
            </div>
          )}

          {/* Compose New Message */}
          {activeTab === "compose" && (
            <div className="card">
              <div className="card-header bg-success text-white">Compose Message</div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">To</label>
                  <input
                    type="email"
                    className="form-control"
                    value={newMail.to}
                    onChange={(e) => setNewMail({ ...newMail, to: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newMail.subject}
                    onChange={(e) => setNewMail({ ...newMail, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={newMail.content}
                    onChange={(e) => setNewMail({ ...newMail, content: e.target.value })}
                    required
                  />
                </div>
                <button className="btn btn-success w-100" onClick={handleSendMessage}>
                  <FaPaperPlane className="me-1" /> Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mailbox;
