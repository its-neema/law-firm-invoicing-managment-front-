import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const AddClient = ({ clientInfo }) => {
  const [name, setName] = useState('');
  const [contactInformation, setContactInformation] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const addClient = () => {
    clientInfo({ name, contactInformation, billingAddress });
    setName('');
    setContactInformation('');
    setBillingAddress('');
  };

  return (
    <div className="">
      <div className='form'>
        <input type='text' value={name} placeholder='Name' onChange={(event) => setName(event.target.value)} />
        <input type='text' value={contactInformation} placeholder='Billing Email' onChange={(event) => setContactInformation(event.target.value)} />
        <input type='text' value={billingAddress} placeholder='Billing Address' onChange={(event) => setBillingAddress(event.target.value)} />
        <button onClick={addClient}>Add</button>
      </div>
    </div>
  );
};

const SearchClient = ({ searchInfo }) => {
  return (
    <div className='search'>
      <input type="text" onChange={(event) => searchInfo(event.target.value)} placeholder="Search for clients.." />
    </div>
  );
};

const InvoiceList = ({ clientInfo }) => {
  // Add logic to display the list of invoices for the selected client
  return (
    <div>
      <h2>Invoice List for {clientInfo.name}</h2>
      {/* Display the list of invoices here */}
    </div>
  );
};

const Client = ({ item, editClient, deleteClient, viewInvoices }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedClient, setEditedClient] = useState({ ...item });

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleUpdate = () => {
    // Assuming you would integrate with your backend API to update a client
    axios.put(`http://localhost:8080/api/v1/client/update/4${item.clientId}`, editedClient).then((response) => {
      console.log(response.data);
    });

    // For now, just updating the state for demonstration
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedClient({ ...item });
  };

  const handleDelete = () => {
    // Assuming you would integrate with your backend API to delete a client
    axios.delete(`/api/v1/client/delete/${item.clientId}`).then((response) => {
      console.log(response.data);
    });

    // For now, just updating the state for demonstration
    deleteClient(item.clientId);
  };
  const InvoiceList = ({ clientInfo }) => {
    // Implement logic to display the list of invoices for the selected client
    return (
      <div>
        <h2>Invoice List for {clientInfo.name}</h2>
        {/* Display the list of invoices here */}
      </div>
    );
  };

  const handleViewInvoices = () => {
    // Call the function to view invoices and pass the client information
    viewInvoices(item);

   
  };

  
  return (
    <tr key={item.clientId} className="">
      <td>{isEditing ? <input type='text' value={editedClient.name} onChange={(e) => setEditedClient({ ...editedClient, name: e.target.value })} /> : item.name}</td>
      <td>{isEditing ? <input type='text' value={editedClient.contactInformation} onChange={(e) => setEditedClient({ ...editedClient, contactInformation: e.target.value })} /> : item.billingEmail}</td>
      <td>{isEditing ? <input type='text' value={editedClient.billingAddress} onChange={(e) => setEditedClient({ ...editedClient, billingAddress: e.target.value })} /> : item.billingAddress}</td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
         {/* <Link to={{pathname:`/invoices/${item.clientId}`,state :item.clientId}}> */}

              <button onClick={handleViewInvoices}>View Invoices</button>
            {/* </Link> */}
        </>
        )}
      </td>
    </tr>
  );
};

const Clinet = () => {
  const [clients, setClients] = useState([]);
  const [searchName, setSearchName] = useState('');

  const fetchClients = async ()  =>{
    await axios.get("http://localhost:8081/api/v1/client/getAll").then((response) => {
           setClients(response.data.data)
    }).catch((err) => {
         console.error(err);
    })
  }
useEffect(()=>{
  fetchClients()
},[])
  const addClient = (client) => {
    const url ="http://localhost:8080/api/v1/client/save"
    console.log(url)
    axios.post(url, client).then((response) => {
      console.log(response.data);
    });

    // For now, just adding to the state for demonstration
    setClients((prevClients) => [...prevClients, { ...client, clientId: prevClients.length + 1 }]);
  };

  const searchClient = (name) => {
    setSearchName(name);
  };

  const deleteClient = (clientId) => {
    // Assuming you would integrate with your backend API to delete a client
    axios.delete(`/apiv1/client/${clientId}`).then((response) => {
      console.log(response.data);
    });

    // For now, just updating the state for demonstration
    setClients((prevClients) => prevClients.filter((client) => client.clientId !== clientId));
  };

  const navigate = useNavigate();
  const viewInvoices = (client) => {
  navigate(`/invoices/${client.clientId}`,{state:client})
  }
  const [invoiceListClient, setInvoiceListClient] = useState(null)


 
  

  return (
    <div className="pt-20 pb-32 om-scin">
      <h1 className='text-center text-blue-600 font-semibold pb-10'>Manage Clients</h1>
      <AddClient clientInfo={addClient} />
      <SearchClient searchInfo={searchClient} />

      <table>
        <thead>
          <tr className="table-row">
            <th>Name</th>
            <th>Billing Email</th>
            <th>Billing Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.filter((client) => client.name.toLowerCase().includes(searchName.toLowerCase()))
            .map((client) => (
              <Client key={client.clientId} item={client} editClient={() => {}} deleteClient={deleteClient} viewInvoices={viewInvoices} />
            ))}
        </tbody>
      </table>
      {invoiceListClient && <InvoiceList clientInfo={invoiceListClient} />}

    </div>
  );
};

export default Clinet;
