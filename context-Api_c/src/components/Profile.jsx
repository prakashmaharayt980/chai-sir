import React, { useContext } from 'react';
import Usercontext from '../context/Usercontext';


 
const Profile = () => {
    const {user}=useContext(Usercontext)
    if(!user){
        return <div>please login</div>
    }else{
     return   <div className="h">welcome mr {user.data}  with password {user.password}</div>
    }
}

export default Profile;
