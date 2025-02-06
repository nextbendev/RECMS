import React, { useState, useEffect } from 'react';

// Dummy data for initial bulletins
const initialBulletins = [
    {
      id: 1,
      title: 'Office Meeting',
      message: 'There will be an office meeting on Friday at 10 AM.',
      createdAt: new Date(Date.now() - 86400000), // 1 day ago
    },
    {
      id: 2,
      title: 'Holiday Schedule',
      message: 'The office will be closed on Presidents Day.',
      createdAt: new Date(Date.now() - 2 * 86400000), // 2 days ago
    },
    {
      id: 3,
      title: 'Office Meeting Reminder',
      message: 'Team meeting scheduled for next Monday at 10 AM in the conference room.',
      createdAt: new Date(Date.now() - 5 * 86400000), // 5 days ago
    },
    {
      id: 4,
      title: 'Office Renovation',
      message: 'The breakroom will be under renovation from March 10 - March 20.',
      createdAt: new Date(Date.now() - 15 * 86400000), // 15 days ago
    },
    {
      id: 5,
      title: 'Policy Update Reminder',
      message: 'Please review the updated HR policies sent via email.',
      createdAt: new Date(Date.now() - 28 * 86400000), // 28 days ago
    },
  ];
  

function BulletinBoard() {
  const [bulletins, setBulletins] = useState(initialBulletins);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Remove bulletins older than 30 days
    const interval = setInterval(() => {
      setBulletins((prev) =>
        prev.filter((bulletin) => {
          const ageInDays = (Date.now() - new Date(bulletin.createdAt)) / (1000 * 60 * 60 * 24);
          return ageInDays <= 30;
        })
      );
    }, 86400000); // Check every day

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && message.trim()) {
      const newBulletin = {
        id: Date.now(),
        title,
        message,
        createdAt: new Date(),
      };
      setBulletins([newBulletin, ...bulletins]);
      setTitle('');
      setMessage('');
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4">📌 Inter-Office Bulletin Board</h4>

      {/* Post a New Bulletin */}
      <form onSubmit={handleSubmit} className="container bg-light shadow-sm rounded p-2">
        <h6 className="text-center mb-2">Post a New Bulletin</h6>

        <div className="row g-1">
          {/* Title Input */}
          <div className="col-12">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Message Input */}
          <div className="col-12 mt-2">
            <textarea
              className="form-control form-control-sm"
              style={{ height: '60px', resize: 'none' }} // Matches task description style
              placeholder="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-2">
          <button type="submit" className="btn btn-primary btn-sm px-3 py-1">Post</button>
        </div>
      </form>

      {/* Display Bulletins */}
      <div className="mt-4">
        {bulletins.length === 0 ? (
          <p className="text-center text-muted">No bulletins to display.</p>
        ) : (
          bulletins.map((bulletin) => (
            <div key={bulletin.id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h6 className="card-title mb-1">{bulletin.title}</h6>
                <p className="card-text">{bulletin.message}</p>
                <small className="text-muted">
                  Posted on {new Date(bulletin.createdAt).toLocaleDateString()} at{' '}
                  {new Date(bulletin.createdAt).toLocaleTimeString()}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BulletinBoard;
