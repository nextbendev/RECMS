import React, { useState } from 'react';
import { FaHeart, FaPaperPlane, FaUserFriends, FaFire } from 'react-icons/fa';
import dummyPosts from '../contexts/DummyPosts';
import "../Stylesheets/NewsFeed.css"

// Dummy Data for Friends
const friends = [
  { id: 1, name: "John Doe", avatar: "https://placehold.co/400" },
  { id: 2, name: "Jane Smith", avatar: "https://placehold.co/400" },
  { id: 3, name: "Michael Johnson", avatar: "https://placehold.co/400" },
  { id: 4, name: "Emily Davis", avatar: "https://placehold.co/400" },
  { id: 5, name: "Robert Brown", avatar: "https://placehold.co/400" },
  { id: 6, name: "Sarah Wilson", avatar: "https://placehold.co/400" },
  { id: 7, name: "Chris Martin", avatar: "https://placehold.co/400" },
  { id: 8, name: "Sophia White", avatar: "https://placehold.co/400" },
  { id: 9, name: "David Lee", avatar: "https://placehold.co/400" },
  { id: 10, name: "Anna Taylor", avatar: "https://placehold.co/400" },
];

// Dummy Data for Trending Topics
const trendingTopics = [
  "#RealEstateBoom",
  "#LuxuryHomes",
  "#InvestmentTips",
  "#MarketTrends",
  "#HouseHunting",
  "#SmartInvesting",
];

function NewsFeed() {
  const [posts, setPosts] = useState(dummyPosts);
  const [newPost, setNewPost] = useState('');

  // Handle new post submission
  const handlePostSubmit = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      content: newPost,
      likes: 0,
      timestamp: new Date().toLocaleString(),
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  // Handle liking a post
  const handleLikePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Main Content Area */}
        <div className="col-lg-8 d-flex flex-column">
          {/* Post Input Box (Fixed) */}
          <div className="card p-3 mb-3 shadow-sm">
            <textarea
              className="form-control"
              rows="2"
              placeholder="What's happening?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <button className="btn btn-primary mt-2 w-100" onClick={handlePostSubmit}>
              <FaPaperPlane className="me-1" /> Post
            </button>
          </div>

          {/* News Feed (Scrollable) */}
          <div className="news-feed-container">
            <div className="news-feed">
              {posts.length === 0 ? (
                <p className="text-center text-muted">No posts yet. Start sharing!</p>
              ) : (
                posts.map((post) => (
                  <div key={post.id} className="card p-3 mb-3 shadow-sm">
                    <p className="mb-1">{post.content}</p>
                    <small className="text-muted">{post.timestamp}</small>
                    <div className="d-flex justify-content-between mt-2">
                      <button className="btn btn-sm btn-outline-primary" onClick={() => handleLikePost(post.id)}>
                        ❤️ {post.likes}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar (Fixed) */}
        <div className="col-lg-4">
          {/* Top Friends */}
          <div className="card mb-3 shadow-sm">
            <div className="card-header bg-primary text-white">
              <FaUserFriends className="me-2" /> Top Friends
            </div>
            <div className="card-body">
              {friends.slice(0, 8).map((friend) => (
                <div key={friend.id} className="d-flex align-items-center mb-2">
                  <img src={friend.avatar} alt={friend.name} className="rounded-circle me-2" width="40" />
                  <span>{friend.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Friends List */}
          <div className="card mb-3 shadow-sm">
            <div className="card-header bg-secondary text-white">
              <FaUserFriends className="me-2" /> Friends List
            </div>
            <div className="card-body">
              {friends.slice(8).map((friend) => (
                <div key={friend.id} className="d-flex align-items-center mb-2">
                  <img src={friend.avatar} alt={friend.name} className="rounded-circle me-2" width="40" />
                  <span>{friend.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="card shadow-sm">
            <div className="card-header bg-info text-white">
              <FaFire className="me-2" /> Trending Topics
            </div>
            <div className="card-body">
              {trendingTopics.map((topic, index) => (
                <p key={index} className="mb-1 text-primary"># {topic}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
