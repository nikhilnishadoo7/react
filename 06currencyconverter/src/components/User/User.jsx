import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <h1 className='text-center text-red-50 bg-gray-600 py-9 text-3xl'>User : {userid}</h1>
  )
}

export default User