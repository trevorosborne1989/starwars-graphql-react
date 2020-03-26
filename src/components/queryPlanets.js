import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import { Table } from 'reactstrap';


const GET_PLANETS = gql`
  query {
    planets {
      id
      name
      residents {
        name
      }
    }
  }
`



const GetPlanets =  () => (
  <Query query={GET_PLANETS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return 'Error!';
      
      const population = (home) => {
        let num = 0
        home.residents.map(res => {++num});
        return num;
      }

      const characters = (homeworld) => {
        if (homeworld.residents.map(res => res.name) == "")
          return "No characters reside here."
        return homeworld.residents.map(res => res.name + " | ")
      }
      
      const renderTableData = () => {
        return data.planets.map(planet => (
          <tbody>
            <tr>
              <td>{planet.name}</td>
              <td>Total residents = {population(planet)}</td>
              <td>Character Names: {characters(planet)} </td>
            </tr>
          </tbody>
        ))
      }
    
      return (
        <Table dark striped bordered hover>
          <thread>
            <tr>
              <th>Residing Star Wars Characters</th>
            </tr>
          </thread>
          {renderTableData()}
        </Table>
      )
    }}
  </Query>
);

export default GetPlanets;