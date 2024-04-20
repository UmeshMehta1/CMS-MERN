import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateBlog() {
  const navigate= useNavigate();
  const [data, setData]=useState({
    title:'',
    subTitle:'',
    description:''
  })

  const postData=async(e)=>{
    e.preventDefault()
    try {
      
      const res = await axios.post("http://localhost:4000/blogs/",data)
      if(res.status=='200'){
        alert(res.data.message);
        navigate('/')

      }else{
        alert("some thing wrong...")
      }
      
    } catch (error) {
      console.log("error: ",error)
    }
      
  }

  useEffect(()=>{
    postData()
  },[])

  const handleChange=(e)=>{
    const {name,value}= e.target;

    setData({
      ...data,
      [name]:value
    })
  }

  return (
    <>
    <Navbar/>
    <div className="pb-12 border-b md:ml-20 border-gray-900/10">
    
        <form onSubmit={postData}>
        <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
          <div className="mt-2">
            <input type="text" value={data.title} name="title"  onChange={handleChange} id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">subTitle</label>
          <div className="mt-2">
            <input type="text" value={data.subTitle} onChange={handleChange} name="subTitle" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <div className="mt-2">
            <input type="text" value={data.description} onChange={handleChange} name="description" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        </div>
        
        <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default CreateBlog