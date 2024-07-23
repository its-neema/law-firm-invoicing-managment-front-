import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Invoice from "./pages/Invoice";
import InvoiceList from "./pages/InvoiceList";
import InvoiceBulkEdit from "./pages/InvoiceBulkEdit";
import ClientList from './pages/Clinet'
import Navbar from "./components/NavigationBar";
import Home1 from "./pages/Home1";
import Signup from './pages/Signup'
import Login from './pages/Login'
import Features from './pages/Features'
import Support from "./pages/Support";
import { UserContext } from "./components/hooks/UserContext";
import Services from "./pages/Services";

const App = () => {
  const [user,setUser]=useState({})

  return (
    <UserContext.Provider value={{ user,setUser }}>
      <div className="om-scin">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/support" element={<Support />} />
          <Route path="/create" element={<Invoice />} />
          <Route path="/invoices/:1d" element={<InvoiceList />} />
          <Route path="/clients" element={<ClientList/>}/>
          <Route path="/create/:id" element={<Invoice />} />
          <Route path="/features" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/edit/:id" element={<Invoice />} />
          <Route path="/bulk_edit" element={<InvoiceBulkEdit />} />
        </Routes>
    </div>
    </UserContext.Provider >
    
  );
};

export default App;
