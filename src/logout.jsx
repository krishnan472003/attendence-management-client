import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  const [uid,setUid] = useState("")
  useEffect(()=>{
    setUid(localStorage.getItem('uid'));
  },[uid])
  
  const handleLogout = () =>{
      signOut(auth)
        .then(() => {
          localStorage.removeItem('uid');
          navigate('/login');
        })
        .catch((error) => {
          console.log(error);
        });
  
  }
  return (
    <div>
      {uid?<><button onClick={handleLogout}>logout</button></>:<>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link></>

}

    </div>
  )
}