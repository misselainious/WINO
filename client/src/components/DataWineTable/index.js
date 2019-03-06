
import React from "react";
import { Grid, Icon, Label, Menu, Table } from 'semantic-ui-react'




export function DataWine(props) {
  return (
<Grid>
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="2">{props.header}</Table.HeaderCell>
        {/* <Table.HeaderCell>Header</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>

      <Table.Row>
        <Table.Cell>Producer</Table.Cell>
        <Table.Cell>{props.producer}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Country</Table.Cell>
        <Table.Cell>{props.country}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Region</Table.Cell>
        <Table.Cell>{props.region}</Table.Cell>
      </Table.Row>


    <Table.Row>    
    <Table.Cell>Subregion</Table.Cell>
    <Table.Cell>{props.subregion}</Table.Cell>
  </Table.Row>

   
    <Table.Row>
        <Table.Cell>ABV</Table.Cell>
        <Table.Cell>{props.abv}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Acidity</Table.Cell>
        <Table.Cell>{props.acidity}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Residual Sugar</Table.Cell>
        <Table.Cell>{props.residualsugar}</Table.Cell>
      </Table.Row>

    </Table.Body>


  </Table>

</Grid>


  );
}



