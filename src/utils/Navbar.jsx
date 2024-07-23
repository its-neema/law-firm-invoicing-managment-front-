import React, { useContext } from "react";
import {  useNavigate,Link } from "react-router-dom";
import { UserContext } from "../components/hooks/UserContext";
import { Nav } from "react-bootstrap";


const Navbar = () => {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      setUser(null)
      navigate("/");
    } catch {
      console.log("can't logut");
    }
  }
  return (
    <Navbar bg="primary" variant="dark">
      <Link to={""} className="navbar-brand">
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
          width="25"
          height="25"
          alt="brand"
        />
      </Link>
      <Nav className="mr-auto">
        <Link to={"addbook"} className="nav-link">
           Book
        </Link>
        <Link to={"members"} className="nav-link">
          Members
        </Link>
        <Link to={"staff"} className="nav-link">
          Staff 
        </Link>
        <Link to={"transactionlist"} className="nav-link">
          Transactions
        </Link>
        <Link to={"login"} className="nav-link">
          Login
        </Link>
        <Link to={"signup"} className="nav-link">
          Sign Up
        </Link>
      </Nav>
    </Navbar>
  );
};
export default Navbar;