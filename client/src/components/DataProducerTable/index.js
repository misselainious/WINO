import React from "react";
import { Grid, Label, Table } from 'semantic-ui-react'


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
          <Table.Cell>Producer</Table.Cell>
          <Table.Cell>{props.producer}</Table.Cell>
        </Table.Row>
        { (props.Owner_Name === "") ? null :
        <Table.Row>
          <Table.Cell>Owner Name:</Table.Cell>
          <Table.Cell>{props.Owner_Name}</Table.Cell>
        </Table.Row>
        }
        { (props.Vineyard_Size_HA === "") ? null :
        <Table.Row>
          <Table.Cell>Vineyard Size in Hectares</Table.Cell>
          <Table.Cell>{props.Vineyard_Size_HA}</Table.Cell>
        </Table.Row>
        }
        { (props.Total_Annual_Production === "") ? null :
        <Table.Row>
          <Table.Cell>Total Annual Production</Table.Cell>
          <Table.Cell>{props.Total_Annual_Production}</Table.Cell>
        </Table.Row>
        }
        { (props.City_of_Origin === "") ? null :
        <Table.Row>
          <Table.Cell>City of Origin</Table.Cell>
          <Table.Cell>{props.City_of_Origin}</Table.Cell>
        </Table.Row>
        }
        { (props.Region === "") ? null :
        <Table.Row>
          <Table.Cell>Region</Table.Cell>
          <Table.Cell>{props.Region}</Table.Cell>
        </Table.Row>
        }
        { (props.Subregion === "") ? null :
        <Table.Row>
          <Table.Cell>Subregion</Table.Cell>
          <Table.Cell>{props.Subregion}</Table.Cell>
        </Table.Row>
        }
        { (props.Country === "") ? null :
        <Table.Row>
          <Table.Cell>Country</Table.Cell>
          <Table.Cell>{props.Country}</Table.Cell>
        </Table.Row>
        }
      </Table.Body>
      </Table>
    </Grid>
  )

}
