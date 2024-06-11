// src/pages/Profile.tsx
import React from 'react';

const Profile: React.FC = () => {
  // Fetch user profile data from Firebase or Redux store
  const userProfile = {
    displayName: 'John Doe',
    email: 'johndoe@example.com',
    photoURL: 'https://example.com/avatar.jpg',
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="card" style={{ width: '18rem' }}>
        <img src={userProfile.photoURL} className="card-img-top" alt="User avatar" />
        <div className="card-body">
          <h5 className="card-title">{userProfile.displayName}</h5>
          <p className="card-text">Email: {userProfile.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
