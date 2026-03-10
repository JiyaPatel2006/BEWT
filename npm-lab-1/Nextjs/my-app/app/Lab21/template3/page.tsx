'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// Import the CSS module
import styles from '../styles/basic.module.css';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.mainWrapper}>
      
      {/* 1. Background Orbs */}
      <div className={styles.backgroundWrapper}>
        <div className={`${styles.orb} ${styles.orb1}`}></div>
        <div className={`${styles.orb} ${styles.orb2}`}></div>
        <div className={`${styles.orb} ${styles.orb3}`}></div>
      </div>

      {/* 2. Navbar */}
     

      {/* 3. Mobile Full Screen Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <button 
          className={`btn ${styles.btnGlass} position-absolute top-0 end-0 m-4 rounded-circle p-2`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </button>
        <Link className={styles.mobileLink} href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link className={styles.mobileLink} href="#agents" onClick={() => setIsMobileMenuOpen(false)}>Agents</Link>
        <Link className={styles.mobileLink} href="#use-cases" onClick={() => setIsMobileMenuOpen(false)}>Use Cases</Link>
        <Link className={styles.mobileLink} href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
        <Link className={`${styles.btnGlass} mt-4 px-5`} href="/signup">Sign Up</Link>
      </div>

      {/* 4. Main Hero Section */}
      <main className={`container ${styles.heroSection}`}>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-xl-8">
            
            {/* Small Badge */}
            <div className="d-flex justify-content-center">
              <button className={styles.badgeGlass}>
                Smart, Fast, Always Active.
                <span className="badge bg-light text-dark ms-2 rounded-1">Launch App</span>
              </button>
            </div>

            {/* Headline */}
            <h1 className={`${styles.heroTitle} display-3 mb-4`}>
              Build, Deploy &amp; Talk to<br className="d-none d-md-block" /> AI Agents in Seconds.
            </h1>

            {/* Subtitle */}
            <p className={`${styles.heroSubtitle} mb-5`}>
              Design AI assistants that research, plan, and execute tasks — all powered by your prompts.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <button className={`${styles.btnGlass} btn-lg w-100 w-md-auto`}>
                Create Agent
              </button>
              <button className={`${styles.btnGlass} btn-lg w-100 w-md-auto gap-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Watch Demo
              </button>
            </div>

          </div>
        </div>
      </main>
      
    </div>
  );
}