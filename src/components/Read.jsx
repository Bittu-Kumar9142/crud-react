import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
    const [data, setData] = useState([])
    function getData() {
        axios.get("https://66ef7c2c3ed5bb4d0bf38db1.mockapi.io/crud-youtube").then((res) => {
          
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = (id)=>{
        axios.delete(`https://66ef7c2c3ed5bb4d0bf38db1.mockapi.io/crud-youtube/${id}`).then(()=>{
            getData()
        })
    }
     

    const setToLocalStorage = (id,name,email)=>{
     localStorage.setItem("id",id)
     localStorage.setItem("name",name)
     localStorage.setItem("email",email)
    }
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto py-5 px-10'>
                <h1 className='text-3xl font-bold mb-3'>Read Operation</h1>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">#</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Email</th>
                            <th className="px-6 py-3 border-b"></th>
                            <th className="px-6 py-3 border-b"></th>
                        </tr>
                    </thead>
                    {
                        data.map((EachData) => {
                            return (
                                <>
                                    <tbody>
                                        <tr className="bg-gray-50 hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{EachData.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">{EachData.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">{EachData.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm border-b">
                                                <Link to="/update">
                                                <button
                                                className='p-2 rounded-md bg-blue-600' onClick={()=> setToLocalStorage(EachData.id,EachData.name,EachData.email)}>Edit</button>
                                                </Link>
                                                 </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm border-b"><button className='p-2 rounded-md bg-red-600' onClick={()=> handleDelete(EachData.id)}>Delete</button></td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })

                    }
                </table>
            </div>
        </>
    )
}

export default Read