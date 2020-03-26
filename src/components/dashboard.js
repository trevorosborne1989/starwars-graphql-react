import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap'; 

function Dashboard() {

  return (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/dashboard">dS</NavbarBrand>
        <Nav navbar>  
          <NavItem>  
            <NavLink href="/planets/">Planet Lore</NavLink>
          </NavItem>
          <NavItem>  
            <NavLink href="/starships/">Starships</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/vehicles/">Vehicles</NavLink>
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