import React from 'react'
import {
    Link
  } from "react-router-dom";

const Home = ()=> {
    const myName = 'Munish Kumar';
    return (
        <div>
            {myName}
            <Link to="/comment"><button className="refresh">Comment </button></Link>
        </div>
    )
}

export default Home
