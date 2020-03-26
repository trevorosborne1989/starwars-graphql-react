import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap'; 
import GetVehicles from './queryVehicles';

function Vehicles() {
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
          <h2 align="center">Vehicles</h2>
          <div>
            <GetVehicles />
          </div>
      </div>
    );
  }
  
  export default Vehicles;