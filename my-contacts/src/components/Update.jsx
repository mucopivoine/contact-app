import React from 'react'
import { useParams } from 'react-router-dom'
import { UpdateContact, FetchContactById } from '../api/contact';
import {useState, useEffect} from 'react'

const Update =() => {
    const {contactId} = useParams();
    const [navigate, setNavigate] = useState('');
    const [message, setMessage] = useState();
    const [contact, setContact] = useState();

    useEffect(() => {
        FetchContactById(contactId)
        .then((response) => {
            setContact(response.data.contact);
        })
        .catch((error) => {
            console.log(error);
        })
    } ,[contactId]);

    const Updatecontact = (event) => {
        event.preventDefault();
     UpdateContact(contactId, contact)
     .then((response) =>{
        if(response.status === 200){
            setContact(response.data.contact);
            setMessage('Contact updated successfully.');
            setNavigate('/Updates');
      setTimeout( () =>{ 
        navigate('/');
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
        setContact({...contact, [e.target.name]: e.target.value});
    }
  return (
    <div>
        <div>
            <form onSubmit={Updatecontact} >
                <div>
                    <label for="Name">Name</label>
                    <input type='text' name='fullName' value={contactId.fullName || ''} onChange={handleInputs}/>
                </div>
                <div>
                    <label for="Name">Email</label>
                    <input type='text' name='email' value={contactId.email || ''} onChange={handleInputs}/>
                </div>
                <div>
                    <label for="Name">Phone</label>
                    <input type='text' name='phone' value={contactId.phone || ''} onChange={handleInputs}/>
                </div>
                <button type='submit'onClick={Updatecontact}>Update</button>
            </form>
        </div>
    </div>
  )
}
}

export default Update