import React from "react";

export default function ProfilePage() {
  return (
    <>
      <div className="profile-page">
        <div className="card profile-card">
          <div className="card-body text-center">
            <h5 className="card-title">Profile</h5>
            <p className="card-text">
              Manage your personal information and settings.
            </p>
            <a href="#" className="btn btn-info">
              Edit Profile
            </a>
          </div>
        </div>
      </div>

      <style >{`
        .profile-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #89f7fe, #66a6ff);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .profile-card {
          width: 26rem;
          border: none;
          border-radius: 18px;
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .profile-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 32px 60px rgba(0, 0, 0, 0.4);
        }

        .card-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .card-text {
          color: #555;
          margin-bottom: 25px;
          font-size: 1rem;
        }

        .btn-info {
          padding: 12px 32px;
          border-radius: 30px;
          font-weight: 600;
          color: white;
        }
      `}</style>
    </>
  );
}
