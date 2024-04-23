import React from 'react'
import { useParams } from 'react-router-dom'
import { UpdateContact, FetchContactById } from '../api/contact';
import { useState, useEffect } from 'react'

const Update = () => {
    const { contactId } = useParams();
    const [message, setMessage] = useState('');
    const [contact, setContact] = useState({});

    useEffect(() => {
        FetchContactById(contactId)
            .then((response) => {
                setContact(response.data.contact);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [contactId]);

    const handleUpdate = (event) => {
        event.preventDefault();
        UpdateContact(contactId, contact)
            .then((response) => {
                if (response.status === 200) {
                    setContact(response.data.contact);
                    setMessage('Contact updated successfully.');
                    setTimeout(() => {
                        window.location.href = '/ContactList';
                    }, 3000);
                } else {
                    setMessage('Failde to update');
                }
            })
            .catch(err => {
                setError(err);
                console.log(err);
            })
        const handleInputs = (e) => {
            setContact({ ...contact, [e.target.name]: e.target.value });
        }
        return (
            <div>
                <div>
                    <form onSubmit={handleUpdate} >
                        <div>
                            <label for="Name">Name</label>
                            <input type='text' name='fullName' value={contact.fullName || ''} onChange={handleInputs} />
                        </div>
                        <div>
                            <label for="Name">Email</label>
                            <input type='text' name='email' value={contact.email || ''} onChange={handleInputs} />
                        </div>
                        <div>
                            <label for="Name">Phone</label>
                            <input type='text' name='phone' value={contact.phone || ''} onChange={handleInputs} />
                        </div>
                        <button type='submit' >Update</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        )
    }
}

export default Update