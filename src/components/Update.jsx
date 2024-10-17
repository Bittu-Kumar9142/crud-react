import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
setId(localStorage.getItem("id"))
setName(localStorage.getItem("name"))
setEmail(localStorage.getItem("email"))
    },[])

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://66ef7c2c3ed5bb4d0bf38db1.mockapi.io/crud-youtube/${id}`,{
            name:name,
            email:email
        }).then(()=>{
            navigate("/read")
        })
    }
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto py-5 px-10'>
         <h1 className='text-xl font-bold'>update</h1>
         <div>
            <div>
                <label className='block font-semibold'>name</label>
                <input
                className='w-full p-2 border-2 outline-none mt-2 rounded-md'
                 type="text"
                 placeholder='Name'
                 value={name}
              onChange={(e)=>setName(e.target.value)}
                  />
            </div>
            
            <div>
                <label className='block font-semibold'>Email</label>
                <input
                className='w-full border-2 p-2 outline-none mt-2 rounded-md'
                 type="Email"
                 placeholder='Email'
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                  />
            </div>
            <button
            className='bg-blue-600 text-white font-semibold px-2 py-1 hover:bg-blue-900 mt-3 rounded-xl'
             type='submit'
             onClick={handleUpdate}
            >update</button>
         </div> 
    </div>
    </>
  )
}

export default Update