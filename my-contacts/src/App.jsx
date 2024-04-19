

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Update from './components/Update';
import { UpdateContact } from './api/contact';



const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updateContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updateContacts);
  };

  const updateContact = (updateContact) => {
    const updateContacts = contacts.map((contact) => contact.id === updateContact.id ? updateContact : contact);
      setContacts(updateContacts);
    };
 

  return (
    <div>
      <div className='wholescreen'>
        <Router>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/AddContact" element={<AddContact addContact={addContact} />} />
            <Route path="/ContactList/:contactId" element={<ContactList deleteContact={deleteContact} updateContact={updateContact} />} />
            <Route path="/Update/:contactId" element={<Update/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App