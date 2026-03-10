"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function Mongo_Db() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const fetchData = async () => {
    const res = await fetch(`/api/task`);
    const temp = await res.json();
    setData(temp);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return(
  <>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">taskId</th>
          <th scope="col">taskTitle</th>
          <th scope="col">taskDescription</th>
          <th scope="col">isCompleted</th>
          <th scope="col">userId</th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td colSpan={5}>Loading data</td>
          </tr>
        )}
        {data.map((d: any) => {
          return (
            <tr key={d.taskId}>
              <td>{d.taskId}</td>
              <td>{d.taskTitle}</td>
              <td>{d.taskDescription} </td>
              <td>{d.isCompleted} </td>
              <td>  
                <button
                  onClick={() => {
                    router.push(`/Lab26/Task/${d.taskId}`);
                  }}>
                  Details
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>)
}

export default Mongo_Db;