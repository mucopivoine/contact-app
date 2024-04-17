import React from 'react'
import { Link } from 'react-router-dom'
import { FetchContactById } from '../api/contact'

const Contactcard = ({ contact }) =>{
  
  return (
    <Link  
  className='rounded-lg border-2 border-cyan-700 p-4 mr-7 ml-5'>
  <div className='sm:flex '>
    <div className=''>
      <h3 className='text-lg'>
        {contact.fullName}
      </h3>
      <p className='mt-1'>{contact.email}</p>
    </div>
  </div>
  <div className='bg-blue-300'>
    <Link to={`/ContactList/${contact._id}`} className='text-white'> More </Link>
  </div>
</Link>

  )
}

export default Contactcard