import React from 'react'
import {Navbar , Nav, Container} from 'react-bootstrap'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <>
           <LinkContainer to='/' style={{marginLeft: '50px', fontSize: "24px" }}>
           <Navbar.Brand >COURSERA</Navbar.Brand>
           </LinkContainer>
            
        
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                   
                <LinkContainer to='/login' style={{marginRight : "50px"}}>
                        <Nav.Link >
                            <FaSignInAlt/>Sign In
                        </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to='/register' style={{marginRight : "50px"}}>
                        <Nav.Link>
                            <FaSignOutAlt/>Sign Up
                        </Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </>
    </Navbar>
</header>
  )
}

export default Header