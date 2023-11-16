import React from 'react'
import {Navbar , Nav, NavDropdown, Badge} from 'react-bootstrap'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch ,useSelector } from 'react-redux'
import { useLogoutMutation } from '../slices/userApiSlice'
import { logout } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const {userInfo} = useSelector((state) => state.auth)
    const [logoutApiCall , {isLoading}] = useLogoutMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const logoutHandler = async()=>{
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <>
           <LinkContainer to='/' style={{marginLeft: '100px', fontSize: "24px" }}>
           <Navbar.Brand >COURSERA</Navbar.Brand>
           </LinkContainer>
            
        
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                   {userInfo ? (
                    <>
                    <NavDropdown title={userInfo.name} id='username' style={{marginRight : '100px', fontSize: "20px", fontWeight:'bold'}}>
                        <LinkContainer to={'/dashboard'}>
                            <NavDropdown.Item>
                                Dashboard
                            </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={'/logout'}>
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                        </LinkContainer>
                        
                    </NavDropdown>
                    </>
                   ) : (
                    <>
                    <LinkContainer to='/login' style={{marginRight : "30px"}}>
                    <Nav.Link >
                        <FaSignInAlt/>Sign In
                    </Nav.Link>
                   </LinkContainer>
            
                   <LinkContainer to='/register' style={{marginRight : "100px"}}>
                    <Nav.Link>
                        <FaSignOutAlt/>Sign Up
                    </Nav.Link>
                   </LinkContainer>
                    </>
                  
                   )}
               
                </Nav>
            </Navbar.Collapse>
        </>
    </Navbar>
</header>
  )
}

export default Header