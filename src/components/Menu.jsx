import React from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav,Container, } from 'react-bootstrap'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter
  } from "react-router-dom"

import Home from '../pages/Home';
import Product from '../pages/Product';
import Login from '../pages/Login';
import About from '../pages/About';
import Contact from '../pages/Contact';




const Menu = () => {
  return (

    <BrowserRouter>
    <div className=''>
 <>
 <Navbar bg="dark" expand="lg">
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as = {Link} to ={'../pages/Home'}>Home</Nav.Link>
        <Nav.Link as = {Link} to ={'../pages/Product'}>Shop</Nav.Link>
        <Nav.Link as = {Link} to ={'../pages/About'}>About</Nav.Link>
        <Nav.Link as = {Link} to ={'../pages/Contact'}>Contact</Nav.Link>
        <Nav.Link as = {Link} to ={'../pages/Login'}>Login</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
<div>
<Routes>
    <Route path='../pages/Login' element ={<Login/>} />
    <Route path='../pages/Contact' element ={<Contact/>} />
    <Route path='../pages/About' element ={<About/>} />
    <Route path='../pages/About' element ={<About/>} />
</Routes>
</div>
    </div>
    </BrowserRouter>
    
  )
}

export default Menu