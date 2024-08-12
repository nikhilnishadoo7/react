import React, { useEffect, useState } from 'react'





export const Github = () => {
    const [data,setData] = useState("");
    useEffect(() => {

        fetch('https://api.github.com/users/nikhilnishadoo7')
        .then(Response=>Response.json())
        .then(data =>{
            setData(data)
        })
          
        }, [])
  return (
    <>
    <h1 className='text-center text-red-50 bg-gray-600 py-9 text-3xl'>Github : {data.name}</h1>
   <img 
   src={data.avatar_url}
   />
    </>
  )
}
