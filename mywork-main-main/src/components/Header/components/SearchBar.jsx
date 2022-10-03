//LocationBar by Dania Haroun !!!
//LocationBar in navbar

import React, { useState } from "react";
import {Button,Form,Modal,InputGroup} from "react-bootstrap";


function SearchBar() {
  const [Showsearch, setShowsearch] = useState(false);

  const handleClose = () => setShowsearch(false);
  const handleShow = () => setShowsearch(true);

  return (
    <div >
      <Button onClick={handleShow}  variant="badge" className="p-0 m-0">
        <span className=" pg-gg ">
   
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-aa"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                 
        </span>
      </Button>
    

      <Modal show={Showsearch} onHide={handleClose}  >
 
        <Modal.Header closeButton>
          <Modal.Title>
            Search
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="text-white  text-overflow-1 ">
                    <InputGroup>
                      <Form.Control
                        placeholder="I'm searching for...."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Button id="button-addon2" className="searchicon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="text-badge"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </Button>
                    </InputGroup>
                  </div>
        </Modal.Body>
      
      </Modal>
    </div>
  );
}

export default SearchBar;

