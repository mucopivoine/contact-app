import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { DeleteContact, FetchContactById } from '../api/contact';

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
    <div>
      {message.type === 'error' && (
        <div className="text-red-600">{message.content}</div>
      )}
      <h1>
        <span>Name:</span> {contact.fullName}
      </h1>
      <p>
        <span>Phone:</span> {contact.phone}
      </p>
      <p>
        <span>Email:</span> {contact.email}
      </p>
      <button onClick={deleteContact} type="button" className="bg-red-200 items-center">
        Delete
      </button>
    </div>
  );
};

export default ContactList;
