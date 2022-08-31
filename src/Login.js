import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {logins, getUserData} from './utils';
import { ToastContainer, toast } from 'react-toastify';
const Login = (props) => {
  const dispatch = useDispatch()
  const state = useSelector(s=>s)
  const [ob, setob] = useState({
    email:"ss@gmail.com",
    password:"123",
    role:"admin"
  })
  const handleChnage = (e) =>{
    const {name, value} = e.target;
    setob({...ob, [name]:value })
    // console.log(setob)
  }
const handleClick = () =>{
  let data = state[ob.role]
  // console.log("hiii",logins)
  if(logins(data,ob)){
    const payload = {
      role:ob.role,
      user:getUserData(data,ob),
      loggedin:true
    }
    dispatch({type:"login", payload})
    toast("Loggedin As "+ ob.role)
    props.history.push("/admin")
    
  }else{
    toast("Failed Loggedin As "+ ob.role)
  }
}

  return (
    <div className='loginform'>
        <h1>Login Page</h1>
        <input name='email' value={ob.email} onChange={handleChnage} placeholder='email'/>
        <input name='password' value={ob.password} onChange={handleChnage} placeholder='password'/>
        <select onChange={handleChnage} value={ob.role} name='role'>
          <option value="" disabled>Select Option</option>
          <option value="admin">Admin</option>
          <option value="faculty">Faculty</option>
          <option value="student">Student</option>
        </select>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
