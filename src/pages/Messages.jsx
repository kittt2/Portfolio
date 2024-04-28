import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Messages() {
    const [response, setresponse] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate =useNavigate();
  async function getallresponse(){
    try{
    const res = await axios.get(`${apiUrl}/api/v1/response/comment`)
    setresponse(res.data.users);
    console.log(response)
    }
    catch(error){
        console.log(error);
    }

}  
    useEffect(() => {
      getallresponse();
    }, [])
    
    

  return ReactDOM.createPortal (
    <>
    <div id='mess1'>
        <div id='mess2'>
        {response.map((res)=>(
            <div key={res._id} id='commentdiv'>
                <div id='commenth2'>
                    <h2>{res.name}</h2>
                     <h2>{res.email}</h2>
                </div>
                <div id='commentp'>
                    <p>{res.text}</p>
                </div>
            </div>
        ))}
      </div>
      <button id='messbtn' onClick={()=>navigate(-1)}>Back</button>
    </div>
    </>,
    document.getElementById('portal1')
  )
}

export default Messages
