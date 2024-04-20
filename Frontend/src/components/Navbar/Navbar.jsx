import React from 'react'
import {Link} from 'react-router-dom'

import {useNavigate} from 'react-router-dom'

function Navbar() {
    const navigate= useNavigate()
  return (
    <div className='bg-slate-800 text-white flex py-4 px-2 md:px-5 items-center text-center justify-between'>
        <div>
            CMS
        </div>

      <nav className=''>
        <ul className='flex items-center '>
            <li  className='mx-[9px]'>
                <Link to='/' >Home</Link>
                </li>

            <li className='mx-[9px]'>
                <Link to='/createblog'>Create</Link>
                </li>
            
        </ul>

        
    </nav>

    <div>
            Login
        </div>

    </div>
   
  )
}

export default Navbar