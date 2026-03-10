"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState} from 'react'

function Mongo_id({params}:{params:{id:number}}) {
    const {id}=useParams();
    const [data,setData]=useState<any>("");

    const fetchData=async()=>{
      
            const res=await fetch(`/api/task/${id}`);
            const temp=await res.json();
            setData(temp);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
       <div>
        {/* <table border={1}>
          <tr>
            <td> {data.first}</td>
           
            <td>{data.city} </td>
          </tr>
          <tr>
             <td> {data.last}</td>
          </tr>
        </table>
        */}
       
         <table className="table">
      <thead>
        <tr>
          <th scope="col">taskId</th>
          <th scope="col">taskTitle</th>
          <th scope="col">taskDescription</th>
          <th scope="col">isCompleted</th>
       
        </tr>
      </thead>
      <tbody>
        
       
        
            <tr key={data.taskId}>
              <td>{data.taskId}</td>
              <td>{data.taskTitle}</td>
              <td>{data.taskDescription} </td>
              <td>{data.isCompleted} </td>
              <td>  
               
              </td>
            </tr>
   
  
      </tbody>
    </table>
    </div>
  )
}

export default Mongo_id