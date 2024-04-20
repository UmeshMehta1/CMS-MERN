import React, { useEffect, useState } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function SinglePage() {
    const {id}= useParams()
    const navigate= useNavigate();
    const[blog,setBlog]=useState({});

    const deletehandler=async()=>{
            axios.delete("http://localhost:4000/blogs/"+id) 
            
            navigate('/');

           
    }
    console.log(blog)


    const fatchData=async()=>{
      const res = await axios.get("http://localhost:4000/blogs/"+id);
      setBlog(res.data.blog);
    }

    useEffect(()=>{
        fatchData()
    },[]);
    
  return (
    <div>
        
<div className="pb-12 border-b md:ml-20 border-gray-900/10">
    
    <form action="">
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-3">
      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
      <div className="mt-2">
        <input type="text" name="title" id="first-name" autocomplete="given-name" value={blog.title} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    </div>

    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-3">
      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">subTitle</label>
      <div className="mt-2">
        <input type="text" name="subTitle" id="first-name" value={blog.subTitle} autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    </div>

    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-3">
      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
      <div className="mt-2">
        <input type="text" name="description" value={blog.description} id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    </div>
    
    <button className='p-2 mx-2 mt-2 text-white bg-red-800 rounded-md hover:bg-red-400' onClick={deletehandler}>Delete</button>
    <Link className='p-2 mx-2 mt-2 text-white bg-green-800 rounded-md hover:bg-green-400' to={`/updateblog/${blog._id}`}>Update</Link>
    </form>
</div>
    </div>
  )
}

export default SinglePage