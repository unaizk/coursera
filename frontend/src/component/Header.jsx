import React from 'react'
import {Navbar , Nav, Container} from 'react-bootstrap'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'


const Header = () => {
  return (
    <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
           
            <Navbar.Brand>Coursera</Navbar.Brand>
        
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                   
                        
                        <Nav.Link >
                            <FaSignInAlt/>Sign In
                        </Nav.Link>
                        
                        
                        <Nav.Link>
                            <FaSignOutAlt/>Sign Up
                        </Nav.Link>
                        
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</header>
  )
}

export default Header