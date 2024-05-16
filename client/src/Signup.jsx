import { useState } from 'react'
import axios from 'axios'

function Signup() {

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setpassword]=useState()
    const handlesubmit = (e)=>{
        e.preventDefault()
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Registration</h2>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                        <strong>Name</strong>
                        </label>
                        <input 
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0" 
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
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
                        className="form-control rounded-0" />
                        onChange={(e)=>setpassword(e.target.value)}
                    </div>
                    <button type="Submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                    <p>Already have an acoount?</p>
                    <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </button>
                </form>
            </div>

        </div>
    );
}

export default Signup