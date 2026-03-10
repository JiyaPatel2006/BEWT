import React from 'react'
import styles from "../../basic.module.css"
async function ID_Student({params}:{params:Promise<{id:String}>}) {
  const {id}=await params;
  const user=await(await fetch(`https://698eabeaaded595c25326d4b.mockapi.io/user/${id}`, { next: { revalidate: 10 } })).json();
    return (
    <div>
           <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
             <th>id</th>
              <th>name</th>
              <th>city</th>

          </tr>
        </thead>
        <tbody>
          <tr key={user.id}>
                 <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.city}</td>
              </tr>
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default ID_Student