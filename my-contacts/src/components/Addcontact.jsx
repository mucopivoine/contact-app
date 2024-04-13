
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const AddContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    addContact(newContact);
    setName('');
    setEmail('');
    setPhone('');
    navigate('/ContactList'); 
  };

  return (
    <>
    <div className='text-center flex  mt-10  justify-center'>
      <h2 className='font-bold text-xl'>Create a new contact</h2>
    </div>
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
            <div className="bg-green-200 p-3 cursor-pointer" onClick={handleSubmit}>Add contact</div>
            </div>
    </form>
    </div>
    </div>
    </>
  );
};

export default AddContact;