"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function Mongo_Db() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const fetchData = async () => {
    const res = await fetch(`/api/user`);
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
          <th scope="col">id</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">City</th>
          <th scope="col">Actions</th>
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
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.first}</td>
              <td>{d.last} </td>
              <td>{d.city} </td>
              <td>  
                <button
                  onClick={() => {
                    router.push(`/Lab26/MongoDb/${d._id}`);
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