import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'


function Home() {
  const navigate= useNavigate();
  const [data, setData] = useState([])

  const fatchData = async () => {
    const res = await axios.get("http://localhost:4000/blogs/")
    console.log(res.data.blogs)
    console.log(res.data)

    setData(res.data.blogs)
    console.log(data._id);
  }

  useEffect(() => {
    fatchData();
  }, [])
  return (
    <>
      <Navbar />
      <div className='flex justify-center gap-9'>
        {data.length > 0 && data.map((item,i) => {
          return (
            <>
              <div key={i}
                className="block p-6 bg-white rounded-lg text-surface shadow-secondary-1 md:max-w-md dark:bg-surface-dark dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">{item.title}</h5>
                <p className="mb-4 text-base">
                  {item.subTitle}
                </p>
                <p className='text-base'>{item.description}</p>
                <button onClick={()=>navigate(`/singleblog/${item._id}`)}
                  type="button"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  See More
                </button>

                {/* <Link to={`/singleblog/${item._id}`} className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                See More
                </Link> */}
              </div>
            </>
          )
        })}

      </div>
    </>

  )
}

export default Home