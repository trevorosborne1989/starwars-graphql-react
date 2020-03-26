import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap'; 
import GetPlanets from './queryPlanets';
import './App.css';

function App() {
  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/dashboard">Star Wars</NavbarBrand>
          <Nav navbar>  
            <NavItem>  
              <NavLink href="/projects/">Planet Lore</NavLink>
            </NavItem>
            <NavItem>  
              <NavLink href="/features/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/releases/">Releases</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sprints/">Sprints</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tasks/">Tasks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/teams/">Teams</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/work/">Work</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
        <h2 align="center">Planet Lore</h2>
        <div>
          <GetPlanets />
        </div>
    </div>
  );
}

export default App;
