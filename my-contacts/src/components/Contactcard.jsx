import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    addContact(newContact);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className='flex items-center justify-center mt-10 mr-10'>
         <div className='max-w-md w-full px-6'>
    <form onSubmit={handleSubmit}>
    <div className='flex-col p-3 mb-3 mx-auto  '>
      <input className=' p-2 border-2' size={50} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className=' flex-col p-3 mb-3 mx-auto '>
      <input className='p-2 border-2' size={50}  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className=' flex-col p-3 mb-3 mx-auto'>
      <input className='p-2 border-2' size={50} type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className=' flex-col p-3 mx-auto'>
      <button className ="bg-green-200 p-3 " >Add contact</button>
      </div>
      
    </form>

    </div>
    </div>
    
  );
};

export default ContactForm;