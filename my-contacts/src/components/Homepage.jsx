import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Contactcard from './ContactCard';

const Homepage = () => {
const [data, setData] = useState([]);
const[error, setError] = useState([]);

const [contacts, setContacts] = useState([]);
useEffect(() => {
    fetchContacts();
}, []);
const fetchContacts = () => {
    axios.get('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list')
        .then((res) => {
            setContacts(res.data.contacts);
        })
        .catch((err) => {
            console.log(err);
            alert("Fetching contacts failed");
        });
};

  return (
        <div className=''>
      <div className=''>
        <div className='flex justify-center lg:gap-x-60 md:gap-x-32 mt-10  mb-10 items-center'>
         <p className='text-xl '>ContactList</p>
         <button className="bg-cyan-600 rounded-md text-white p-4"><a href="/AddContact">Add new</a></button>
        </div>
     <div>
 
     </div>
      </div>
      <div className='grid rounded-lg lg:p-7 gap-2 md:mt-16 md:grid-cols-2 md:gap-10 lg:grid-cols-3'>
        {contacts && contacts.map((contact) => (
          <Contactcard key={contact._id} contact={contact}/>
        ))}

      </div>
      
    </div>
    
  );
};

export default Homepage;