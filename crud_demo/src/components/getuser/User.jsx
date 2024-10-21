import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './User.css'
import axios from 'axios'
import toast from 'react-hot-toast'

const User = () => {
  const[users,setUser]=useState([]);

  useEffect(()=>{
    const feachData=async()=>{
      const response= await axios.get("http://localhost:4000/api/getall")
      setUser(response.data);
    }
    feachData();

  },[])

  const deleteUser=async(userid)=>{ 
     await axios.delete(`http://localhost:4000/api/delete/${userid}`)
     .then((response)=>{
      setUser((prevUser)=>prevUser.filter((user)=>user._id !==userid))
      toast.success(response.data.msg ,{position:'top-right'})
    })
     .catch((error)=>{
      console.log(error)
     })
  }
  return (
    <div className='userTable'>
        <Link to={"/add"} className='addButton'>Add User </Link>
      <Link to={"/add"}>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>S.No</th>
                <th>User name</th>
                <th>User email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=>{
              return(
                <tr key={user._id}>
                <td>{index+ 1}</td>
                <td>{user.fname} {user.lname}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={()=>deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                    <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                </td>
            </tr>
              )
            })
          }
           
        </tbody>
      </table>
    </div>
  )
}

export default User
