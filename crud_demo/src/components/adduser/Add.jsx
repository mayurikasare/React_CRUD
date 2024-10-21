
import React, { useState } from 'react'
import './add.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import toast from "react-hot-toast"
const Add = () => {
  const users={
    fname:"",
    lname:"",
    email:"",
    password:""
  }
  const[user,setUser]=useState(users);
  const navigate=useNavigate();

 const inputHandler=(e)=>{
        const{name,value}=e.target;
        setUser({...user, [name]:value});
        console.log(user)
 }
//  const handleSubmit=async(e)=>{
//   e.preventDefault();
//   await axios.post("http://localhost:4000/api/create", user, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
  
//   .then((response)=>{
//     toast.success(response.data.msg,{position:"top-right"})
//      navigate("/")
//   }).catch(error=>console.error(error))
//  }

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:4000/api/create", user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    toast.success(response.data.msg, { position: "top-right" });
    navigate("/");
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    toast.error("Failed to add user");
  }
};

  
  return (
    <div className='adduser'>
     <Link to={"/"}>Back</Link>
     <h3>Add new user</h3>
     <form className='adduserform' onSubmit={handleSubmit}>
        <div className="inputGroup">
        <label htmlFor='fname '>First name</label>
            <input type='text'onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='first name'/>
        </div>
          <div className="inputGroup">
          <label htmlFor='lname '>Last name</label>
            <input type='text' onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='last name'/>
            </div>  
            <div className="inputGroup">
            <label htmlFor='password'>Password</label>
            <input type='password'onChange={inputHandler}  id='password' name='password' autoComplete='off' placeholder='password'/>
            </div>
            <div className="inputGroup">
            <label htmlFor='email'>Email</label>
            <input type='email' onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='email'/>
            </div>
            <div className="inputGroup">
                <button type='submit'>ADD USER</button>
            </div>
     </form>
    </div>
  )
}

export default Add
