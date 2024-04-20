import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
function UpdateBloge() {
    const {id}=useParams();
    const [blog,setBlog]=useState({})

    const handleChange=(e)=>{
      const {name,value}= e.target
       
      setBlog({
        ...blog,
        [name]:value
      })

    }

    const fatchSinglePage=async()=>{
        const res =  await axios.get("http://localhost:4000/blogs/"+id)

        setBlog(res.data.blog);
        console.log(res.data)
    }

    useEffect(()=>{
        fatchSinglePage()
    },[])
   
  return (
    <div>

<div className="pb-12 border-b md:ml-20 border-gray-900/10">
    
    <form action="">
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-3">
      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
      <div className="mt-2">
        <input type="text" onChange={handleChange} value={blog.title} name="title" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    </div>

    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-3">
      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">subTitle</label>
      <div className="mt-2">
        <input type="text" onChange={handleChange} value={blog.subTitle} name="subTitle" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    </div>

    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-3">
      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
      <div className="mt-2">
        <input type="text" onChange={handleChange} value={blog.description} name="description" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    </div>
    
    <Link className='p-2 mx-2 my-4 text-white bg-green-800 rounded-md md:mt-6 hover:bg-green-400' to={`/`}>Update</Link>
    </form>
</div>
    </div>
  )
}

export default UpdateBloge