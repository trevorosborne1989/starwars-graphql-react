import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap'; 

function Dashboard() {

  return (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Star Wars</NavbarBrand>
        <Nav navbar>  
          <NavItem>  
            <NavLink href="/Planets/">Planet Lore</NavLink>
          </NavItem>
          <NavItem>  
            <NavLink href="/Starships/">Starships</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Vehicles/">Vehicles</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
    <div>
      <h1 align="center">Dashboard</h1>
    </div>
  </div>
  )
}

export default Dashboard;
