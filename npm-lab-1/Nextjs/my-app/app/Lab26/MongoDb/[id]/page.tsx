"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState} from 'react'

function Mongo_id({params}:{params:{id:number}}) {
    const {id}=useParams();
    const [data,setData]=useState<any>('');

    const fetchData=async()=>{
      
            const res=await fetch(`/api/user/${id}`);
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
          <th scope="col">id</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">City</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        
       
        
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.first}</td>
              <td>{data.last} </td>
              <td>{data.city} </td>
              <td>  
               
              </td>
            </tr>
   
  
      </tbody>
    </table>
    </div>
  )
}

export default Mongo_id