import React, { useState, useEffect, useContext } from "react";
import { navbarData } from "./DataForPage/dummyData";
import {NavLink, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../components/hooks/UserContext";

const Navbar = () => {
 

  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const logout =()=>{
    setUser(null)
    navigate("/")
  }

  return (
    <div className="pb-6">
      
      <div className=" h-16 flex transition fixed items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20">
      <div className="container-fluid " style = {{display : "flex" , justifyContent : "center"}} >
          <nav className="navbar navbar-expand-sm navbar-dark bg-transparent justify-content-center">

        <div className="grid grid-flow-col justify-items-center items-center content-center w-full text-black">
          <Link to="/"> 
          <div className="">
          <h5 class="cursor-pointer text-4xl text-blue-500 font-inter font-medium tracking-tight">Case</h5>
          </div>
          </Link>
           
          
          
         
            {navbarData.map((item) => {
              return (
                <div key={item.id}>
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offse={50}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className="cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                    
                  >
                    {item.name}
                  </Link>
                  
                </div>
              );
            })}
            
            {
              user ?
              <>
                <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item text-black">
                <NavLink
                  className="nav-link text-black"
                  //   activeClassName="active_class"
                  exact="true"
                  to="/clients"
                >
                  CLients
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  className="nav-link text-black"
                  //   activeClassName="active_class"
                  exact="true"
                  to="/login"
                >
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </NavLink>
              </li>
            </ul>
              </>
              :
              <>
              <Link to='/signup'>
            <div>
            <h2 className="font-semibold">Free Trial</h2>
          </div>
            </Link>
              </>
            }
        </div>
        </nav>
     </div>
      </div>
    </div>
  );
};

export default Navbar;
