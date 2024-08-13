import React from 'react'
import { useState } from 'react';
import userContext from '../../context/UserContext';
import UserContextProvider from '../../context/UserContextProvider';
import { useContext } from 'react';


function Login() {
    const [userName, setuserName] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const {setUser} = useContext(userContext)
    const handlecontext = (e) =>{
        e.preventDefault();
        setUser({userName,userPassword});
       
    }
  return (
    <div>
        <input type="text" placeholder='name' value={userName} onChange={(e)=>setuserName(e.target.value)}/>
        login
        <input type="text" placeholder='name' value={userPassword} onChange={(e)=>setuserPassword(e.target.value)}/>
        Password
        <button onClick={handlecontext}>submit</button>
    </div>
  )
}

export default Login