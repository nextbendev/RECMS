import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaBriefcase, FaBuilding, FaFacebook, FaLinkedin, FaTwitter, FaEdit, FaPaperPlane } from 'react-icons/fa';

function RealEstateProfile() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  
  // Sample Profile Data
  const profile = {
    name: "John Doe",
    title: "Luxury Real Estate Specialist",
    location: "Los Angeles, CA",
    phone: "+1 (123) 456-7890",
    email: "johndoe@realestate.com",
    brokerage: "Luxury Realty Group",
    specialization: ["Luxury Homes", "Investment Properties", "First-Time Buyers"],
    bio: "Helping clients find their dream homes with personalized service and expert market knowledge.",
    socialLinks: {
      facebook: "https://facebook.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
    listings: [
      { id: 1, title: "Modern Villa in Beverly Hills", price: "$3,200,000", image: "https://placehold.co/50" },
      { id: 2, title: "Luxury Penthouse in Downtown LA", price: "$2,500,000", image: "https://placehold.co/50" },
    ],
  };

  // Handle new post submission
  const handlePostSubmit = () => {
    if (!newPost.trim()) return; // Prevent empty posts

    const post = {
      id: Date.now(),
      content: newPost,
      timestamp: new Date().toLocaleTimeString(),
    };

    setPosts([post, ...posts]); // Add new post at the top
    setNewPost(''); // Clear input
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        {/* Profile Header */}
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src="https://placehold.co/50" alt="Profile" className="rounded-circle me-3" />
            <div>
              <h3 className="mb-1">{profile.name}</h3>
              <p className="text-muted">{profile.title} at {profile.brokerage}</p>
            </div>
          </div>
          {/* Edit Profile Button */}
          <button className="btn btn-outline-primary">
            <FaEdit className="me-1" /> Edit Profile
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-3">
          <p><FaPhone className="me-2 text-primary" /> {profile.phone}</p>
          <p><FaEnvelope className="me-2 text-primary" /> {profile.email}</p>
          <p><FaMapMarkerAlt className="me-2 text-primary" /> {profile.location}</p>
        </div>

        {/* Specializations */}
        <div className="mt-3">
          <h5>Specializations</h5>
          <ul className="list-group">
            {profile.specialization.map((specialty, index) => (
              <li key={index} className="list-group-item">
                <FaBriefcase className="me-2 text-success" /> {specialty}
              </li>
            ))}
          </ul>
        </div>

        {/* Bio */}
        <div className="mt-3">
          <h5>About Me</h5>
          <p className="text-muted">{profile.bio}</p>
        </div>

        {/* Active Listings */}
        <div className="mt-3">
          <h5>Active Listings</h5>
          <div className="row">
            {profile.listings.map((listing) => (
              <div key={listing.id} className="col-md-4 mb-3">
                <div className="card">
                  <img src={listing.image} className="card-img-top" alt={listing.title} />
                  <div className="card-body text-center">
                    <h6 className="card-title">{listing.title}</h6>
                    <p className="text-primary">{listing.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post Feed */}
        <div className="mt-3">
          <h5>Post Updates</h5>
          {/* Post Input Box */}
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

         
        </div>

        {/* Social Links */}
        <div className="mt-3 text-center">
          <h5>Connect with Me</h5>
          <a href={profile.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
            <FaFacebook />
          </a>
          <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary me-2">
            <FaLinkedin />
          </a>
          <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-info">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RealEstateProfile;
