
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

{/* checks for an empty string and does not render the row in table if empty */}
{ (props.subregion === "") ?
null
:
// Else Renders row with info
<Table.Row>    
<Table.Cell>Subregion</Table.Cell>
<Table.Cell>{props.subregion}</Table.Cell>
</Table.Row>
}


{ (props.abv === "") ?
null
:
    <Table.Row>
        <Table.Cell>ABV</Table.Cell>
        <Table.Cell>{props.abv}</Table.Cell>
      </Table.Row>
}

{ (props.acidity === "") ?
null
:
      <Table.Row>
        <Table.Cell>Acidity</Table.Cell>
        <Table.Cell>{props.acidity}</Table.Cell>
      </Table.Row>
}
{ (props.residualsugar === "") ?
null
:
      <Table.Row>
        <Table.Cell>Residual Sugar</Table.Cell>
        <Table.Cell>{props.residualsugar}</Table.Cell>
      </Table.Row>
}

{ (props.color === "") ?
null
:
      <Table.Row>
        <Table.Cell>Color</Table.Cell>
        <Table.Cell>{props.color}</Table.Cell>
      </Table.Row>
}

{ (props.dosage === "") ?
null
:
      <Table.Row>
        <Table.Cell>Dosage</Table.Cell>
        <Table.Cell>{props.dosage}</Table.Cell>
      </Table.Row>
}
{ (props.blend === "") ?
null
:
      <Table.Row>
        <Table.Cell>Years in Blend</Table.Cell>
        <Table.Cell>{props.blend}</Table.Cell>
      </Table.Row>
}

{ (props.bottling === "") ?
null
:
      <Table.Row>
        <Table.Cell>Bottling Date</Table.Cell>
        <Table.Cell>{props.bottling}</Table.Cell>
      </Table.Row>
}

{ (props.disgorgement === "") ?
null
:
      <Table.Row>
        <Table.Cell>Disgorgement Date</Table.Cell>
        <Table.Cell>{props.disgorgement}</Table.Cell>
      </Table.Row>
}

{ (props.closure === "") ?
null
:
      <Table.Row>
        <Table.Cell>Closure</Table.Cell>
        <Table.Cell>{props.closure}</Table.Cell>
      </Table.Row>
}

{ (props.annual === "") ?
null
:
      <Table.Row>
        <Table.Cell>Annual Cases Produced</Table.Cell>
        <Table.Cell>{props.annual}</Table.Cell>
      </Table.Row>
}

{ (props.varieties === "") ?
null
:
      <Table.Row>
        <Table.Cell>Varieties</Table.Cell>
        <Table.Cell>{props.varieties}</Table.Cell>
      </Table.Row>
}

{ (props.maceration === "") ?
null
:
      <Table.Row>
        <Table.Cell>Maceration Notes</Table.Cell>
        <Table.Cell>{props.maceration}</Table.Cell>
      </Table.Row>
}

{ (props.pumpover === "") ?
null
:
      <Table.Row>
        <Table.Cell>Pumpover / Punchdown</Table.Cell>
        <Table.Cell>{props.pumpover}</Table.Cell>
      </Table.Row>
}

{ (props.destem === "") ?
null
:
      <Table.Row>
        <Table.Cell>Destemming</Table.Cell>
        <Table.Cell>{props.destem}</Table.Cell>
      </Table.Row>
}

{ (props.fermentation_vessel === "") ?
null
:
      <Table.Row>
        <Table.Cell>Frmentation Vessel</Table.Cell>
        <Table.Cell>{props.fermentation_vessel}</Table.Cell>
      </Table.Row>
}

{ (props.fermentation_duration === "") ?
null
:
      <Table.Row>
        <Table.Cell>Frmentation Duration</Table.Cell>
        <Table.Cell>{props.fermentation_duration}</Table.Cell>
      </Table.Row>
}

{ (props.agingmethod === "") ?
null
:
      <Table.Row>
        <Table.Cell>Aging Method</Table.Cell>
        <Table.Cell>{props.agingmethod}</Table.Cell>
      </Table.Row>
}

{ (props.agingmonths === "") ?
null
:
      <Table.Row>
        <Table.Cell>Aging Duration (months)</Table.Cell>
        <Table.Cell>{props.agingmonths}</Table.Cell>
      </Table.Row>
}

{ (props.filtered === "") ?
null
:
      <Table.Row>
        <Table.Cell>Filtered</Table.Cell>
        <Table.Cell>{props.filtered}</Table.Cell>
      </Table.Row>
}

{ (props.fining === "") ?
null
:
      <Table.Row>
        <Table.Cell>Fining Agent</Table.Cell>
        <Table.Cell>{props.fining}</Table.Cell>
      </Table.Row>
}

{ (props.yeast === "") ?
null
:
      <Table.Row>
        <Table.Cell>Yeast</Table.Cell>
        <Table.Cell>{props.yeast}</Table.Cell>
      </Table.Row>
}

{ (props.lees === "") ?
null
:
      <Table.Row>
        <Table.Cell>Lees Contact</Table.Cell>
        <Table.Cell>{props.lees}</Table.Cell>
      </Table.Row>
}
{ (props.malo === "") ?
null
:
      <Table.Row>
        <Table.Cell>Malolactic Fermentation</Table.Cell>
        <Table.Cell>{props.malo}</Table.Cell>
      </Table.Row>
}

{ (props.sulfur === "") ?
null
:
      <Table.Row>
        <Table.Cell>Added Sulfur</Table.Cell>
        <Table.Cell>{props.sulfur}</Table.Cell>
      </Table.Row>
}

{ (props.vineyard === "") ?
null
:
      <Table.Row>
        <Table.Cell>Vineyard Name, Meaning</Table.Cell>
        <Table.Cell>{props.vineyard}</Table.Cell>
      </Table.Row>
}

{ (props.soil === "") ?
null
:
      <Table.Row>
        <Table.Cell>Soil Type(s)</Table.Cell>
        <Table.Cell>{props.soil}</Table.Cell>
      </Table.Row>
}

{ (props.elevation === "") ?
null
:
      <Table.Row>
        <Table.Cell>Elevation (meters)</Table.Cell>
        <Table.Cell>{props.elevation}</Table.Cell>
      </Table.Row>
}

{ (props.aspect === "") ?
null
:
      <Table.Row>
        <Table.Cell>Vineyard Aspect</Table.Cell>
        <Table.Cell>{props.aspect}</Table.Cell>
      </Table.Row>
}

{ (props.vineage === "") ?
null
:
      <Table.Row>
        <Table.Cell>Vine Age (average)</Table.Cell>
        <Table.Cell>{props.vineage}</Table.Cell>
      </Table.Row>
}

{ (props.vineyields === "") ?
null
:
      <Table.Row>
        <Table.Cell>Vine Yield (Hl/Ha)</Table.Cell>
        <Table.Cell>{props.vineyields}</Table.Cell>
      </Table.Row>
}

    </Table.Body>


  </Table>

</Grid>


  );
}



