// import React from "react";
// import Link from "next/link";

// export default function Lab26Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg custom-navbar" data-bs-theme="dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" href="/Lab28">
//             Lab28 Homepage
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" href="/Lab28/demo-a">
//                   demo-a
//                 </Link>
//               </li>  
//                 <li className="nav-item">
//                 <Link className="nav-link" href="/Lab28/demo-b">
//                   demo-b
//                 </Link>
//               </li>
             
              
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <main className="main-content">{children}</main>

//       {/* CSS */}
//       <style >{`
//         .custom-navbar {
//           background: linear-gradient(135deg, #141e30, #243b55);
//           padding: 14px 25px;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
          
//         }

//         .navbar-brand {
//           font-size: 1.4rem;
//           font-weight: 700;
//           letter-spacing: 0.5px;
//         }

//         .navbar-nav .nav-link {
//           margin-left: 15px;
//           font-weight: 500;
//           position: relative;
//           transition: color 0.3s ease;
//         }

//         .navbar-nav .nav-link::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: -5px;
//           width: 0%;
//           height: 2px;
//           background: #ffd369;
//           transition: width 0.3s ease;
//         }

//         .navbar-nav .nav-link:hover {
//           color: #ffd369;
//         }

//         .navbar-nav .nav-link:hover::after {
//           width: 100%;
//         }

//         .main-content {
//           padding: 40px;
//           min-height: calc(100vh - 70px);
//           background: #f5f7fa;
//         }
//       `}</style>
//     </>
//   );
// }
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Lab 28 - Server Actions Demo',
  description: 'NextJS Server Actions Implementation',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <header style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <h1 style={{ margin: 0 }}>Lab 28: NextJS Server Actions</h1>
            <p style={{ margin: '10px 0 0', opacity: 0.9 }}>
              Demonstrating Server-Side Form Handling
            </p>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}