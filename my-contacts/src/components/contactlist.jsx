
import React from 'react';
import ContactForm from './Contactcard';


const ContactList = ({ contacts, deleteContact, updateContact }) => {
  return (
  <div className=''>
    <div className='flex justify-center items-center'>
    <ul className='md:w-2/5'>
        
      {contacts.map((contact) => (

        <li key={contact.id} className="bg-cyan-600 flex flez-col p-4 mb-4 w-[400px] ml-20">
           <div>
         <p><span>Name:{contact.name} </span></p>
         <p><span>Email: {contact.email} </span></p>
          <p><span>Contact: {contact.phone}</span></p>
          </div>
          <div className='flex mx-auto justify-center mt-2'>
         
          <button className='bg-gray-300 p-1 ml-2 mr-2' onClick={() => deleteContact(contact.id)}>Delete</button>
          
          
          <button className='bg-gray-300 p-1 ml-2 mr-2' onClick={() =>updateContact(contact.id)}>Update</button>
          </div>
         
        </li>
      ))}
    </ul> 
    </div>
    </div>
  )  
};

export default ContactList;