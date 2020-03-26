import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap'; 
import GetVehicles from './queryVehicles';

function Vehicles() {
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
          <h2 align="center">Vehicles</h2>
          <div>
            <GetVehicles />
          </div>
      </div>
    );
  }
  
  export default Vehicles;