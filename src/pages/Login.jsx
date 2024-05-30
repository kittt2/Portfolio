import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoArrowBackOutline } from "react-icons/io5";

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    async function login(e) {
        e.preventDefault();
        try {
           
            if(email=="nitinadmin@gmail.com" && password=="admin3n")
                {
                toast.success("login complete");
                navigate("/mess")
            } else {
                toast.error("email or password not correct");

              
            }
        
        }

        catch (error) {
            console.log(error)
        }

    }

    return ReactDOM.createPortal(
        <>
        
        <div>
            <div id='contactf2'>
                <form onSubmit={login} id='loginform'>
                <span id='backbtn' onClick={()=>navigate(-1)}><IoArrowBackOutline /></span>

                    <input type="text" placeholder='email' onChange={(e) => setemail(e.target.value)} value={email} />
                    <input type="text" placeholder='password' onChange={(e) => setpassword(e.target.value)} value={password} />
                    <button type='submit' id='loginbtn'>Submit</button>
                </form>
            </div>
        </div>
        </>,
        document.getElementById('portal1')
    )
}

export default Login
