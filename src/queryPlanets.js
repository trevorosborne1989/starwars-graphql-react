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
      let n = 0
      
      const jakku = (val) => {
        let num = 0
        data.planets.map(res => res.residents.map(peo => {++num}));
        return num;
      }
      
      const renderTableData = () => {
        return data.planets.map(planet => (
          <tbody>
            <tr>
              <th scope="row">{++n}</th>
              <td>{planet.name}</td>
              <td>Total residents = {jakku(planet)}</td>
              <td>{planet.id}</td>
            </tr>
          </tbody>
        ))
      }
    
      return (
        <Table dark striped bordered hover>
          <thread>
            <tr>
              <th>#</th>
              <th>Planet</th>
              <th>Residing Star Wars characters</th>
            </tr>
          </thread>
          {renderTableData()}
        </Table>
      )
    }}
  </Query>
);

export default GetPlanets;