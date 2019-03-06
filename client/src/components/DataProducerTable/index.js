import React from "react";
import { Grid, Icon, Label, Menu, Table } from 'semantic-ui-react'

export const DataProducers = (props) => {
    return (


    <Grid>
          <Table celled>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell colSpan="2">{props.header}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
      </Table>
    </Grid>
  )

}

// producer: String,
// date_founded: String,
// property_history: String,
// owner_history: String,
// owner_name: String,
// other_important_people: String,
// vineyard_size_ha: Number,
// total_annual_production: String,
// city_of_origin: String,
// region: String,
// subregion: String,
// country: String