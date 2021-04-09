import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

const Comment = ()=> {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const url = `http://localhost:4000/comments`;

    const fetchData = ()=>{
        setLoading(true)
        axios.get(url)
            .then((res) => {
                setComments(res.data);
                setLoading(false);
        })
            .catch(() => {
                setHasError(true);
                setLoading(false);
            })
       } 

    useEffect(() => {
       fetchData() 
    }, [])

    return (
        <>
        <Link to="/"><button className="refresh">Home </button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="refresh" onClick={fetchData}>Refresh</button>
        
        <div className="scrollable">
           <table border="1">
             <tbody>
             <tr>
                <th>Post Id</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
            
            {
                loading ? <tr><td colSpan="5">Loading...</td></tr> : hasError ? <tr><td colSpan="5">Error occured.</td></tr>
                  : (comments.map(data => <tr key={data.id}>
                      <td>{data.postId}</td>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.body}</td>
                      </tr>))
            }
            </tbody>
         </table>
        </div>
        </>
    )
}

export default Comment
