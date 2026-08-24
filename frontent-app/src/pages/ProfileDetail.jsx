import React from "react";
import "../styles/ProfileDetail.css";

const ProfileDetail = () => {
  return (
    <div className="profile-card">
      {/* Profile Header */}
      <img
        src="https://via.placeholder.com/150"
        alt="Sarah Jenkins"
        className="avatar"
      />
      <h2 className="name">Sarah Jenkins</h2>
      <p className="email">sarah.jenkins@example.com</p>

      {/* Role & Status Badges */}
      <div className="badges">
        <span className="badge badge-user">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          User
        </span>
        <span className="badge badge-active">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Active
        </span>
      </div>

      {/* Activity Overview */}
      <div className="activity-title">ACTIVITY OVERVIEW</div>

      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-number">14</div>
          <div className="stat-label">
            Items
            <br />
            Reported
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-number">8</div>
          <div className="stat-label">
            Successful
            <br />
            Claims
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
