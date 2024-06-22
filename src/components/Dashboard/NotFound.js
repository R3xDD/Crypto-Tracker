import React from 'react'
import Button from '../Common/Button/Button'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
      <div className=' flex justify6center items-cente flex-col mx-auto my-20 rounded-lg bg-[#1b1b1b] p-20 w-fit'>
          <p  className='text-center text-4xl font-bold mb-20'>No Crypto Currencies Found</p>
          <Link className="w-fit mx-auto my-4 " to="/">
            <Button outlined={true} text="Back To Home"  />
          </Link>
      </div>
  )
}

export default NotFound