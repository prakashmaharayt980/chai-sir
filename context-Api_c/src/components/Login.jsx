import React, { useContext, useState } from 'react';
import Usercontext from '../context/Usercontext';

const Login = () => {
    const[data,setdata]=useState('')
    const[password,setpassword]=useState('')

    const {setuser}=useContext(Usercontext)
    const handleclick=(e)=>{
       e.preventDefault()
       setuser({data,password})
    }
    return (
        <>
           <h1>type</h1>
           <input type='text' value={data} onChange={(e)=>setdata(e.target.value)} placeholder='user' /> 
           <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' /> 
           <button type="submit" onClick={handleclick}>submit</button>
        </>
    );
}

export default Login;
