import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import { Table } from 'reactstrap';


const GET_STARSHIPS = gql`
  query {
    starships {
      name
      class
    }
  }
`



const GetStarships =  () => (
  <Query query={GET_STARSHIPS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return 'Error!';
      let n = 0
      
      const renderTableData = () => {
        return data.starships.map(starship => (
          <tbody>
            <tr>
              <th scope="row">{++n}</th>
              <td>{starship.name}</td>
              <td>{starship.class}</td>
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

export default GetStarships;