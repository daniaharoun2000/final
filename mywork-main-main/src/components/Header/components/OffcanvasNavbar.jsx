//Offcanvas by Dania Haroun !!!
//Offcanvas navbar

import React, { useState } from 'react';
import {Button,Offcanvas} from 'react-bootstrap';
import lines from '../images/lines.svg';

function OffcanvasNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="badge" onClick={handleShow} className=" d-xl-none d-inline">
        <img src={lines}  alt="logo"
              width={15}
             />
      </Button>

      <Offcanvas show={show} onHide={handleClose} className=" p-3 w-50">
        <Offcanvas.Header closeButton className='shadow-sm zindex-fixed-nav'>
          <Offcanvas.Title><h5 className='text-primary '>Menu</h5></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
     
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">

           <li className="nav-item ">
            <a  href="/" role="button"  aria-expanded="false" className='nav-link text-decoration-none text-aa'>
            Home
            </a>   </li> 
         <li className="nav-item ">
            <a  href="/" role="button"  aria-expanded="false" className='nav-link  text-decoration-none text-aa'>
            Shop
            </a>   </li>   <li className="nav-item ">
            <a  href="/" role="button"  aria-expanded="false" className='nav-link  text-decoration-none text-aa'>
            Product
            </a>   </li>      <li className="nav-item ">
             <a  href="/" role="button"  aria-expanded="false" className='nav-link  text-decoration-none text-aa'>
            Blog
            </a>   
            </li>       <li className="nav-item "><a  href="/" role="button"  aria-expanded="false" className='nav-link  text-decoration-none text-aa'>
            Pages
            </a>   </li>      <li className="nav-item "> <a  href="/" role="button"  aria-expanded="false" className='nav-link  text-decoration-none text-aa'>
            Contact
            </a>   </li> 
         
    
        </ul>
       
      
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasNavbar;

///End of  (OffcanvasNavbar)
