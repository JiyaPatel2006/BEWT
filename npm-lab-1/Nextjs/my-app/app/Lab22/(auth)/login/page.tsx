import React from "react";

export default function LoginPage() {
  return (
    <>
      <div className="page">
        <div className="card login-card">
          <div className="card-body text-center">
            <h5 className="card-title">Login Page</h5>
            <p className="card-text">
              Welcome back! Please login to continue.
            </p>
            <a href="#" className="btn btn-primary">
              Login
            </a>
          </div>
        </div>
      </div>

      <style >{`
        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .login-card {
          width: 24rem;
          border: none;
          border-radius: 18px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .login-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 55px rgba(0, 0, 0, 0.35);
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .card-text {
          color: #555;
          margin-bottom: 25px;
        }

        .btn-primary {
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
