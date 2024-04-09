
import React, { useState } from 'react';
import ContactList from './components/contactlist';
import ContactForm from './components/Contactcard';
import Header from './components/header';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };
  const updateContact = (id) =>{
   const [updatecontacts, setUpdatecontacts] = useState(contacts);
   const changeContact = (e) =>{
    const{name,value } = e.target;
    setUpdatecontacts({...updatecontacts, [name]: value });
   }
   const handleSubmit = (e) =>{
    e.preventDefault();
    toUpdate(updatecontacts);
   }
  }
  return (
    <div>
      
      <Header/>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
      {/* <ContactList updateContact={updateContact}/> */}
    </div>
  );
};

export default App
