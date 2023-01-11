import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from'../../assets/image/logo.png'
import { useSelector } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import { userLogout } from '../../api/userApi'



const Header = () => {
    const {isAuth} = useSelector(state => state.login)
    const logoutUser = () => {
        userLogout()
        sessionStorage.removeItem('createJWT')
        localStorage.removeItem('crmSite')
    }

  return (
    <Navbar collapseOnSelect bg = 'secondary' variant='dark' expand = 'md' className='p-2'>
        <Navbar.Brand>
            <img src = {logo} alt = 'logo' width={'80px'} height = {'60px'}/>
        </Navbar.Brand>
        <NavbarToggle aria-controls='basic-navbar-nav'/>
            <NavbarCollapse id = 'basic-navbar-nav'>
                <Nav style={{marginLeft:'auto',}}>
                    <LinkContainer to='/dashboard'>
                        <Nav.Link>Главная</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/tickets'>
                        <Nav.Link>Заявки</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                        <Nav.Link
                        onClick={logoutUser}
                        >Выйти</Nav.Link>
                    </LinkContainer>
                </Nav>
            </NavbarCollapse>
    </Navbar>
  )
}

export default Header