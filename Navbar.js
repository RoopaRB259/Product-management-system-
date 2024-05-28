import React from 'react';
import { Link } from "react-router-dom";



function Navbar() {
    const navStyle = {
        textDecoration: 'none'

    }
    
return (
        <nav className="navbar navbar-expand-sm bg-dark narbar-dark">
            <div className="container-fluid">
                <a  className='text-light' style={navStyle}>Product Management System</a>
                <ul className="nav ">
          <li className=""><Link  to="/home"className="nav-link text-light" href="#">Home</Link></li>
                    <li className=" "><Link to="/product"className="nav-link text-light" href="#">Product</Link></li>
                    <li className=" "><Link to="add-product"className="nav-link text-light" href="#">AddProduct</Link></li>
     <li className=""><Link to="/log"className="nav-link text-light" href="#">Logout</Link></li>
      <li className=""><Link to="/login"className="nav-link text-light" href="#">Login</Link></li> 


                </ul>
            </div>
        </nav>
    )
}

export default Navbar