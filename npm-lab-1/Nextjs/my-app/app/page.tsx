export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Next.js Project Labs</h1>

        <ul className="lab-list">
          <li><a href="/Lab20">Lab 20</a></li>
          <li><a href="/Lab21">Lab 21</a></li>
          <li><a href="/Lab22">Lab 22</a></li>
          <li><a href="/Lab23">Lab 23</a></li>
          <li><a href="/Lab25">Lab 25</a></li>
          <li><a href="/Lab26">Lab 26</a></li>
          <li><a href="/Lab28">Lab 28</a></li>
          <li><a href="/Lab29">Lab 29</a></li>

        </ul>
      </div>

      <style >{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: white;
        }

        h1 {
          margin-bottom: 30px;
          font-size: 2.5rem;
          letter-spacing: 1px;
        }

        .lab-list {
          list-style: none;
          padding: 0;
        }

        .lab-list li {
          margin: 12px 0;
        }

        .lab-list a {
          display: block;
          width: 220px;
          padding: 14px;
          text-align: center;
          text-decoration: none;
          color: #333;
          background: white;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .lab-list a:hover {
          transform: translateY(-5px);
          background: #ffd369;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
}
