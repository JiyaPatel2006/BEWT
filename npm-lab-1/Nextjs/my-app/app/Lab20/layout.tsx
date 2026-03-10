import React from 'react'
import Link from 'next/link'
export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" style={{color:'white'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/Lab20">Lab20Homepage</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Lab20/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Lab20/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Lab20/Contact">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
      <main style={{padding:"30px"}}>
        {children}
      </main>
    </div>
  )
}
