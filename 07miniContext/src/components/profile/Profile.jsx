import React from 'react'
import userContext from '../../context/UserContext'
import Login from '../login/Login'
import UserContextProvider from '../../context/UserContextProvider'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(userContext);

    
        if(user) return <div>welcome {user.userName}</div>

           
           return <div>plz login</div>
  
}

export default Profile