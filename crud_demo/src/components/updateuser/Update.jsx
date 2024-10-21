import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './update.css'
import axios from 'axios'
import toast from 'react-hot-toast'
const Update = () => {
  const inputchangehandler=(e)=>{
    const {name,value}=e.target;
    setUser({...user, [name]:value});
    console.log(user)
  }
  
  const users={
    fname:"",
    lname:"",
    email:""
  }
  const {id}=useParams();  //feach id from url
  const navigate=useNavigate();
const[user,setUser]=useState(users);
useEffect(()=>{
  axios.get(`http://localhost:4000/api/getone/${id}`)
   .then((response)=>{
    setUser(response.data)
   })
   .catch((error)=>{
    console.log(error)
   })
},[id]);
  //onsubmit
  const handleUpdate=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/update/${id}`,user)
    .then((response)=>{
      toast.success(response.data.msg,{position:"top-right"})
       navigate("/")
    }).catch(error=>console.error(error))
  }
  return (
    <div>
     <div className='updateuser'>
     <Link to={"/"}>Back</Link>
     <h3>Update user</h3>
     <form className='updateuserform' onSubmit={handleUpdate}>
        <div className="inputGroup">
        <label htmlFor='fname '>First name</label>
            <input type='text' value={user.fname} onChange={inputchangehandler}   id='fname' name='fname' autoComplete='off' placeholder='first name'/>
        </div>
          <div className="inputGroup">
          <label htmlFor='lname '>Last name</label>
            <input type='text' value={user.lname}   onChange={inputchangehandler} id='lname' name='lname' autoComplete='off' placeholder='last name'/>
            </div> 
            <div className="inputGroup">
            <label htmlFor='email'>Email</label>
            <input type='email' value={user.email} onChange={inputchangehandler}  id='email' name='email' autoComplete='off' placeholder='email'/>
            </div>
            <div className="inputGroup">
                <button type='submit'>UPDATE USER</button>
            </div>
     </form>
    </div> 
    </div>
  )
}

export default Update
