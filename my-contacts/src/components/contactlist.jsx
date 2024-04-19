import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { DeleteContact, FetchContactById, UpdateContact } from '../api/contact';

const ContactList = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({});
  const [message, setMessage] = useState({
    type: '',
    content: '',
  });

  useEffect(() => {
    FetchContactById(contactId)
      .then((response) => {
        setContact(response);
      })
      .catch((error) => {
        console.log(error);
        setMessage({
          type: 'error',
          content: 'Failed to fetch contact. Please try again later.',
        });
      });
  }, [contactId]);

  const deleteContact = (event) => {
    event.preventDefault();
    DeleteContact(contactId)
      .then((response) => {
        setMessage({
          type: 'success',
          content: response,
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setMessage({
          type: 'error',
          content: 'Failed to delete contact. Please try again later.',
        });
      });
  };

  return (
    <div className=' flex flex-col mt-10 gap-5 items-center p-5 container'>
      {message.type === 'error' && (
        <div className="text-red-600">{message.content}</div>
      )}
      <div className=''>
        <h1 className='text-xl mb-5'><span className='text-2xl'>Name:</span> {contact.fullName}</h1>
        <p className='text-xl mb-5'><span className='text-2xl'>Phone:</span> {contact.phone}</p>
        <p className='text-xl mb-5'><span className='text-2xl'>Email:</span> {contact.email}</p>

      </div>
      <div className=' justify-evenly mr-5'>
        <button onClick={deleteContact} type="button" className="bg-black items-center w-20 p-2 mr-5 text-white">
          Delete
        </button>
        <button type='button' onClick={UpdateContact} className='bg-red-500 items-center w-20 p-2 text-white'>
          Update
        </button>
      </div>
    </div>
  );
};

export default ContactList;
