import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from'../../assets/image/logo.png'

const Header = () => {
  return (
    <Navbar collapseOnSelect bg = 'secondary' variant='dark' expand = 'md' className='p-2'>
        <Navbar.Brand>
            <img src = {logo} alt = 'logo' width={'80px'} height = {'50px'}/>
        </Navbar.Brand>
        <NavbarToggle aria-controls='basic-navbar-nav'/>
            <NavbarCollapse id = 'basic-navbar-nav'>
                <Nav style={{marginLeft:'auto'}}>
                    <Nav.Link href='/dashboard'>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link href='/dashboard'>
                        Tickets
                    </Nav.Link>
                    <Nav.Link href='/dashboard'>
                        Logout
                    </Nav.Link>
                </Nav>
            </NavbarCollapse>
    </Navbar>
  )
}

export default Header