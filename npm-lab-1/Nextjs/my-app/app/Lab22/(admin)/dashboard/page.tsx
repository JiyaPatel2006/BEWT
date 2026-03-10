import React from "react";

export default function DashboardPage() {
  return (
    <>
      <div className="dashboard-page">
        <div className="card dashboard-card">
          <div className="card-body text-center">
            <h5 className="card-title">Dashboard</h5>
            <p className="card-text">
              Welcome to your dashboard overview.
            </p>
            <a href="#" className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
      </div>

      <style >{`
        .dashboard-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #1d2671, #c33764);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .dashboard-card {
          width: 26rem;
          border: none;
          border-radius: 18px;
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .dashboard-card:hover {
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

        .btn-primary {
          padding: 12px 32px;
          border-radius: 30px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
