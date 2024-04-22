import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Contactcard from './ContactCard';
import { Table, TableBody, TableHead, TableHeadCell, TableRow, TableCell, Pagination } from 'flowbite-react'
import { Link } from 'react-router-dom';


const Homepage = () => {
  
  // const [contactData, setcontactData] = useState([]);
  const [error, setError] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1);
  const [contacts, setContacts] = useState([]);
  const contactsPerPage = 5;
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
        setError("Fetching contacts failed");
      });
  };

  // const handlePages = (pageNumber) => {
  //   setCurrentPage(pageNumber)
    
  // }
  // const totalContacts = contacts.length;
  // const lastPageIndex = Math.ceil(totalContacts / contactsPerPage);
  // const currentPageClamped = Math.min(currentPage , lastPageIndex);
  // const indexOfLastContact = Math.min(currentPageClamped * contactsPerPage, totalContacts);
  // const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  // const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);
  return (
    <div className='container justify-center items-center flex flex-col'>
      <div className=''>
        <div className='flex justify-center mt-10 mb-10 gap-10 lg:gap-48 items-center md:gap-20  '>
         <input type="text"  name="search " placeholder="Search by name" className='border-2 w-70 p-3 px-7'></input>
          <button className="bg-cyan-600 rounded-md text-white p-4"><Link to="/AddContact">Add new</Link></button>
        </div>
      </div>
      <div className=''>
        {error && <p className='text-red-500'>{error}</p>}
        <Table className=' container bg-black w-full items-center justify-center '>
          <TableHead className=''>
            <TableHeadCell className='bg-cyan-500 p-3 flex' >Name</TableHeadCell>
            <TableHeadCell className='bg-cyan-500 '>Email</TableHeadCell>
            <TableHeadCell className='bg-cyan-500 ' >Phone</TableHeadCell>
            <TableHeadCell className='bg-cyan-500 ' >Modify</TableHeadCell>
          </TableHead>
          <TableBody className='divide-y divide-x-2 border-y-2 border-r-2 '>
            {contacts.map((contact) => (
              <TableRow key={contact._id} className=' bg-white dark:border-gray-700 dark:bg-gray-800 p-5'>
                <TableCell className='px-5 py-6'>{contact.fullName}</TableCell>
                <TableCell >{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell><Link to={`/ContactList/${contact._id}`} className='text-cyan-600 '> Edit </Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <div>
        
        <Pagination 
        activePage={currentPage} 
        itemsPerPage={contactsPerPage} 
        totalItems={contacts.length} 
        pagesDisplayed={5} 
        onChange={handlePages}/>
    </div> */}
    </div>
  );
};

export default Homepage;