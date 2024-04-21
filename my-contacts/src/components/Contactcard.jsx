import React from 'react'
import { Link } from 'react-router-dom'

const Contactcard = ({ contact }) => {

  return (
    <Link
      className=''>
      {/* <div className='sm:flex '>
         <div className=''>
          <h3 className='text-lg'>
            {contact.fullName}
          </h3>
          <p className='mt-1'>{contact.email}</p>
        </div> 
      </div> */}
    </Link>

  )
}

export default Contactcard