import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  const data = useLoaderData()
  return (
    <div className='text-center flex gap-4 items-center justify-center m-4 bg-gray-600 text-white p-4 text-9xl'> {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githhubInfoLoader = async () => {
  const response = (await fetch('https://api.github.com/users/Yogeshk76'))
  return response.json()
}
