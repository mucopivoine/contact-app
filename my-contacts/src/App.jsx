

import React, { useState } from 'react';
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import Header from './components/header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';


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
   
  }
  return (
    <div>
    <div className='wholescreen'>
    <Router>
     <Routes>
      <Route path="/" element={<Header />}/>
      <Route path="/" element={<Homepage />}/>
      <Route path="/AddContact" element={<AddContact addContact={addContact} />}/>
      <Route path="/ContactList" element={<ContactList deleteContact={deleteContact} updateContact={updateContact} />}/>
      </Routes>
      </Router>
      </div> 
    </div>
  );
};

export default App