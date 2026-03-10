import React from "react";
import Link from "next/link";

export default function Lab23() {
  return (
    <>
      <div className="page">
        <div className="card custom-card">
          <div className="card-body text-center">
            <h5 className="card-title">Lab 23</h5>
            <p className="card-text">
              This is the LAB 23 home page.
            </p>
            <Link href="/" className="btn btn-primary">
              ← All Labs
            </Link>
          </div>
        </div>
      </div>

      {/* Styling */}
      <style >{`
        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #43cea2, #185a9d);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .custom-card {
          width: 22rem;
          border: none;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .custom-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.35);
        }

        .card-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .card-text {
          color: #555;
          margin-bottom: 20px;
        }

        .btn-primary {
          padding: 10px 20px;
          font-weight: 600;
          border-radius: 25px;
        }
      `}</style>
    </>
  );
}
