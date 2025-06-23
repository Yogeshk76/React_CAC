import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userId} = useParams()
  return (
    <div className='text-center flex gap-4 items-center justify-center m-4 bg-orange-700 text-black p-4 text-9xl'>
      <p className='text-3xl'>User ID: {userId}</p>
    </div>
  )
}

export default User
