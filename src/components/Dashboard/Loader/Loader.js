import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
 
  return (
      <div className='absolute flex items-center justify-center  h-[50vw] w-[70vw] z-[100]'>
        <CircularProgress sx={{color:"#40afa0"}} />
    </div>
  )
}

export default Loader
