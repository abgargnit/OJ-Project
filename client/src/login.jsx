import React from "react";
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
    const handlesubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})  // This will post the data to the server side
        .then(result => {
        console.log(result)
        if(result.data === "Welcome"){
            navigate('/dashboard')
        }
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0" 
                        onChange={(e)=>setEmail(e.target.value)}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=>setPassword(e.target.value)} 
                        />
                        
                    </div>
                    <button type="Submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    </form>
                    <p>Already have an acoount?</p>
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Sign Up
                    </Link>
                
            </div>

        </div>
    );
}

export default Login