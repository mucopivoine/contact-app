import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Homepage = () => {
  const [data, setDataone] = useState('')

  const handleFetch = ()=>{
    axios({
      method:'post',
      url:'https://contact-app-server-nxgi.onrender.com/api/v1/contactapp',
    }).then((res)=>{
      console.log(res.data);
      setData(res.data);

    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    handleFetch()
  }, []);
  return (
        <div className='flex justify-center gap-40 mt-10 items-center '>
      <div >
      <p className='text-xl text-center '>Contact list</p>
      </div>
      <div>
        <button className="bg-cyan-600 rounded-md text-white p-4  "><a href="/AddContact">add new </a></button>
      </div>
    </div>
    
  )
}

export default Homepage