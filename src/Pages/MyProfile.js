import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaFacebook, FaLinkedin, FaTwitter, FaEdit, FaPaperPlane } from 'react-icons/fa';
import { useGlobalState } from '../contexts/GlobalContext';

function MyProfile() {
  const { state, dispatch } = useGlobalState(); // ✅ Get user & properties from global context
  const user = state.user || {}; // Ensure user is defined
  const listings = state.properties?.filter((property) => property.creatorID === Number(user.userId)) || []; // Get only user-created listings

  const [newPost, setNewPost] = useState('');

  // Load posts from global state
  const [posts, setPosts] = useState(user.posts || []);

  useEffect(() => {
    // Sync posts with global context when user changes
    setPosts(user.posts || []);
  }, [user.posts]);

  // Handle new post submission
  const handlePostSubmit = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      content: newPost,
      timestamp: new Date().toLocaleTimeString(),
    };

    // Update global context
    dispatch({
      type: "ADD_POST",
      payload: { userId: user.userId, post },
    });

    // Update local state
    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        {/* Profile Header */}
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={user.profilePicture || "https://placehold.co/150"} alt="Profile" className="rounded-circle me-3" />
            <div>
              <h3 className="mb-1">{user.name || "Your Name"}</h3>
              <p className="text-muted">{user.brokerage || "Your Brokerage"}</p>
            </div>
          </div>
          <button className="btn btn-outline-primary">
            <FaEdit className="me-1" /> Edit Profile
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-3">
          <p><FaPhone className="me-2 text-primary" /> {user.cellPhone || "N/A"}</p>
          <p><FaEnvelope className="me-2 text-primary" /> {user.email || "N/A"}</p>
          <p><FaMapMarkerAlt className="me-2 text-primary" /> {user.location || "Your Location"}</p>
        </div>

        {/* Specializations */}
        <div className="mt-3">
          <h5>Specializations</h5>
          {user.specializations && user.specializations.length > 0 ? (
            <ul className="list-group">
              {user.specializations.map((specialty, index) => (
                <li key={index} className="list-group-item">
                  <FaBriefcase className="me-2 text-success" /> {specialty}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No specializations listed.</p>
          )}
        </div>

        {/* Active Listings */}
        <div className="mt-3">
          <h5>My Listings</h5>
          {listings.length > 0 ? (
            <div className="row">
              {listings.map((listing) => (
                <div key={listing.parcelNumber} className="col-md-4 mb-3">
                  <div className="card">
                    <img src={listing.imageUrl || "https://via.placeholder.com/150"} className="card-img-top" alt={listing.streetAddress} />
                    <div className="card-body text-center">
                      <h6 className="card-title">{listing.streetAddress}</h6>
                      <p className="text-primary">${listing.listPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">No active listings yet.</p>
          )}
        </div>

        {/* Post Feed */}
        <div className="mt-3">
          <h5>Post Updates</h5>
          <div className="card p-3 mb-3">
            <textarea
              className="form-control"
              rows="2"
              placeholder="Share an update..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <button className="btn btn-primary mt-2 w-100" onClick={handlePostSubmit}>
              <FaPaperPlane className="me-1" /> Post
            </button>
          </div>

          {/* Display Posts */}
          {posts.length > 0 ? (
            <ul className="list-group">
              {posts.map((post) => (
                <li key={post.id} className="list-group-item">
                  {post.content} <small className="text-muted">({post.timestamp})</small>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No updates yet.</p>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-3 text-center">
          <h5>Connect with Me</h5>
          {user.socialLinks && (
            <>
              <a href={user.socialLinks.facebook || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                <FaFacebook />
              </a>
              <a href={user.socialLinks.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary me-2">
                <FaLinkedin />
              </a>
              <a href={user.socialLinks.twitter || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-info">
                <FaTwitter />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
