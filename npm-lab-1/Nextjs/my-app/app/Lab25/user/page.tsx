import React from "react";
import styles from "../basic.module.css";
import Link from "next/link";

async function Lab25_Student() {
  const ans = await (
    await fetch("https://698eabeaaded595c25326d4b.mockapi.io/user", {
      next: { revalidate: 10 },
    })
  ).json();

  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>city</th>
              <th>Action</th>

              
              
            </tr>
          </thead>
          <tbody>
            {ans.map((s: any) => (
              <tr>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.city}</td>
               <td><Link href={`/Lab25/user/${s.id}`} className="btn btn-primary">View Details</Link></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Lab25_Student;
