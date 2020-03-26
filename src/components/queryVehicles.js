import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import { Table } from 'reactstrap';


const GET_VEHICLES = gql`
  query {
    vehicles {
      name
      class
    }
  }
`



const GetVehicles =  () => (
  <Query query={GET_VEHICLES}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return 'Error!';
      let n = 0

      const renderTableData = () => {
        return data.vehicles.map(vehicle => (
          <tbody>
            <tr>
              <th scope="row">{++n}</th>
              <td>{vehicle.name}</td>
              <td>{vehicle.class}</td>
            </tr>
          </tbody>
        ))
      }
    
      return (
        <Table dark striped bordered hover>
          <thread>
            <tr>
              <th>#</th>
            </tr>
          </thread>
          {renderTableData()}
        </Table>
      )
    }}
  </Query>
);

export default GetVehicles;