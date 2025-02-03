import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaSearch } from "react-icons/fa";

// Dummy Friends & Conversations
const friendsList = [
  { id: "friend1", name: "John Doe", avatar: "https://placehold.co/50" },
  { id: "friend2", name: "Jane Smith", avatar: "https://placehold.co/50" },
  { id: "friend3", name: "Michael Johnson", avatar: "https://placehold.co/50" },
  { id: "friend4", name: "Emily Davis", avatar: "https://placehold.co/50" },
  { id: "friend5", name: "Sarah Wilson", avatar: "https://placehold.co/50" },
];

const dummyConversations = {
  friend1: [
    { id: 1, sender: "friend1", content: "Hey! How's your day?", timestamp: "10:30 AM" },
    { id: 2, sender: "self", content: "Pretty good! Just closed a real estate deal. 😊", timestamp: "10:32 AM" },
  ],
  friend2: [
    { id: 3, sender: "friend2", content: "Do you have any new properties available?", timestamp: "1:15 PM" },
    { id: 4, sender: "self", content: "Yes! I’ll send you the details now.", timestamp: "1:17 PM" },
  ],
};

function Messages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Load conversation when friend is selected
  useEffect(() => {
    if (selectedFriend) {
      setMessages(dummyConversations[selectedFriend.id] || []);
    }
  }, [selectedFriend]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedFriend) return;

    const message = {
      id: Date.now(),
      sender: "self",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Friends List & Search */}
        <div className="col-lg-3">
          <div className="card shadow-sm p-3">
            <h5>Friends</h5>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search friends..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-secondary">
                <FaSearch />
              </button>
            </div>
            <ul className="list-group">
              {friendsList
                .filter((friend) => friend.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((friend) => (
                  <li
                    key={friend.id}
                    className={`list-group-item d-flex align-items-center ${selectedFriend?.id === friend.id ? "active" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedFriend(friend)}
                  >
                    <img src={friend.avatar} alt={friend.name} className="rounded-circle me-2" width="40" />
                    {friend.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Inbox Section */}
        <div className="col-lg-3">
          <div className="card shadow-sm p-3">
            <h5>Inbox</h5>
            <ul className="list-group">
              {Object.keys(dummyConversations).map((friendId) => {
                const friend = friendsList.find((f) => f.id === friendId);
                if (!friend) return null;
                return (
                  <li
                    key={friend.id}
                    className={`list-group-item d-flex align-items-center ${selectedFriend?.id === friend.id ? "active" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedFriend(friend)}
                  >
                    <img src={friend.avatar} alt={friend.name} className="rounded-circle me-2" width="40" />
                    <div>
                      <strong>{friend.name}</strong>
                      <small className="text-muted d-block">Last message: {dummyConversations[friendId]?.slice(-1)[0]?.content || "No messages"}</small>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Selected Conversation */}
        <div className="col-lg-6">
          {selectedFriend ? (
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white d-flex align-items-center">
                <img src={selectedFriend.avatar} alt={selectedFriend.name} className="rounded-circle me-2" width="40" />
                <h6 className="mb-0">{selectedFriend.name}</h6>
              </div>

              {/* Messages Container */}
              <div className="card-body messages-container" style={{ height: "400px", overflowY: "auto" }}>
                {messages.length === 0 ? (
                  <p className="text-muted text-center">No messages yet.</p>
                ) : (
                  messages.map((msg) => (
                    <div key={msg.id} className={`d-flex ${msg.sender === "self" ? "justify-content-end" : "justify-content-start"} mb-2`}>
                      {msg.sender !== "self" && <img src={selectedFriend.avatar} alt={selectedFriend.name} className="rounded-circle me-2" width="30" />}
                      <div className={`p-2 rounded ${msg.sender === "self" ? "bg-primary text-white" : "bg-light text-dark"}`} style={{ maxWidth: "75%" }}>
                        <p className="mb-1">{msg.content}</p>
                        <small className="text-muted">{msg.timestamp}</small>
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Box */}
              <div className="card-footer">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <button className="btn btn-primary" onClick={handleSendMessage}>
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="card p-3 shadow-sm text-center">
              <p className="text-muted">Select a conversation to view messages</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;
