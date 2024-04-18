import axios from 'axios';
const API = import.meta.env.VITE_BASE_API;

export const FetchContacts = () =>{
    return axios.get(API + "/contact/list")
    .then((response) => {
        return response.data.contacts;
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });
};

export const FetchContactById = (id) => {
    return axios.get(API + "/contact/findById?id=" + id)
        .then((response) => {
            return response.data.contact;
        })
        .catch((err) => {
            console.log(err);
            alert('error while fetching data');
        });
};

export const AddingContact = (contact) => {
    return axios.post(`${API}/contact/add`, contact)
        .then((response) => {
            console.log(response.data.message);
            return response.data.message;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const DeleteContact = (id) => {
    return axios.delete(API + "/contact/delete?id=" + id)
        .then((response) => {
            console.log(response.data.message);
           alert('deleted successfully');
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const UpdateContact = (id) => {
    return axios.put(API + '/contact/update?id=' + id)
    .then((response) => {
        console.log(response.data.message);
        alert('update successfull');
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });
}

