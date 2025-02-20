import React, { useRef } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../index.css"

export default function NavbarComponent() {

  return (
    <>
      <Navbar expand="sm" style = {{backgroundColor: "#A1E3F9"}}>
          <Navbar.Brand as={Link} to = "/" style={{fontSize: '2rem', fontWeight: 'bold', marginLeft: '10px'}}>
              <div class ="brandTitle" style={{color:"#074799"}}>
                <span>Sto</span><span>rage</span>&
                <span>As</span><span>sis</span><span>t</span><span>ant</span>
              </div>
          </Navbar.Brand>
          <Nav className="ms-auto" >
              <Nav.Link as = {Link} to="/user" style={{fontSize: '1rem'}}>
                  Profile
              </Nav.Link>
        </Nav>
    </Navbar>
    </>
  )
}

  