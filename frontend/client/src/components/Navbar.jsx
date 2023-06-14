import React from 'react'

const Navbar = () => {
  return (
    <div className='h-50 shadow-md relative bg-white dark:bg-black dark:text-slate-100'>
      <div className="py-2.5 sm:px-5 sm:py-2 flex justify-between items-center" >
<div className='flex justify-start items-center'>
<h2>Maduka SMEs</h2>
</div>
<div className='flex justify-end items-center'>
    <p>Login</p>
</div>
      </div>
    </div>
  )
}

export default Navbar
