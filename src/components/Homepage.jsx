import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableHead, TableHeadCell, TableRow, TableCell } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const contactsPerPage = 5;

  useEffect(() => {
    fetchContacts();
  }, [currentPage, searchTerm]); // Update contacts when currentPage or searchTerm changes

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

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearches = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset currentPage when performing a new search
  };

  const filteredContacts = currentContacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container justify-center items-center flex flex-col'>
      <div className=''>
        <div className='flex justify-center mt-10 mb-10 gap-10 lg:gap-48 items-center md:gap-20'>
          <input type="text" name="search" placeholder="Search by name" className='border-2 w-70 p-3 px-7' onChange={handleSearches}></input>
          <button className="bg-cyan-600 rounded-md text-white p-4"><Link to="/AddContact">Add new</Link></button>
        </div>
      </div>
      <div className=''>
        {error && <p className='text-red-500'>{error}</p>}
        <Table className='container bg-black w-full items-center justify-center'>
          <TableHead>
            <TableHeadCell className='bg-cyan-500 p-3 flex'>Name</TableHeadCell>
            <TableHeadCell className='bg-cyan-500'>Email</TableHeadCell>
            <TableHeadCell className='bg-cyan-500'>Phone</TableHeadCell>
            <TableHeadCell className='bg-cyan-500'>Modify</TableHeadCell>
          </TableHead>
          <TableBody className='divide-y divide-x-2 border-y-2 border-r-2'>
            {filteredContacts.map((contact) => (
              <TableRow key={contact._id} className='bg-white dark:border-gray-700 dark:bg-gray-800 p-5'>
                <TableCell className='px-5 py-6'>{contact.fullName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell><Link to={`/ContactList/${contact._id}`} className='text-cyan-600'>Edit</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <ul className="pagination flex">
        {Array.from({ length: Math.ceil(contacts.length / contactsPerPage) }).map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? 'active' : null}>
            <button onClick={() => handlePageChange(index + 1)} className='px-3 py-1'>
              {index + 1}
            </button>
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default Homepage;