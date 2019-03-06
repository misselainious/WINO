import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { DataWine} from "../components/DataWineTable";
import { Link } from "react-router-dom";
import { Grid, Table} from "semantic-ui-react";
import Winecard from "../components/WineCard"


class OneWine extends Component {
  state = {
    wine: {}
  };

  componentDidMount() {
    API.getWine(this.props.match.params.id)
      .then(res => this.setState({ wine: res.data }))
      .catch(err => console.log(err));
  }


    
 
//HANDLE Blah-blah-blah

render() {
    return (

     <Grid>



<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="2">{this.state.wine.Wine}</Table.HeaderCell>
        {/* <Table.HeaderCell>Header</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>

      <Table.Row>
        <Table.Cell>Producer</Table.Cell>
        <Table.Cell>{this.state.wine.Producer}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Country</Table.Cell>
        <Table.Cell>{this.state.wine.Country}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Region</Table.Cell>
        <Table.Cell>{this.state.wine.Region}</Table.Cell>
      </Table.Row>

{/* checks for an empty string and does not render the row in table if empty */}
{ (this.state.wine.Subregion === "") ?
null
:
// Else Renders row with info
<Table.Row>    
<Table.Cell>Subregion</Table.Cell>
<Table.Cell>{this.state.wine.Subregion}</Table.Cell>
</Table.Row>
}


{ (this.state.wine.Alcohol_by_volume === "") ?
null
:
    <Table.Row>
        <Table.Cell>Alcohol by Volume</Table.Cell>
        <Table.Cell>{this.state.wine.Alcohol_by_volume}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Acidity === "") ?
null
:
      <Table.Row>
        <Table.Cell>Acidity</Table.Cell>
        <Table.Cell>{this.state.wine.Acidity}</Table.Cell>
      </Table.Row>
}
{ (this.state.wine.Residual_Sugar === "") ?
null
:
      <Table.Row>
        <Table.Cell>Residual Sugar</Table.Cell>
        <Table.Cell>{this.state.wine.Residual_Sugar}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Color === "") ?
null
:
      <Table.Row>
        <Table.Cell>Color</Table.Cell>
        <Table.Cell>{this.state.wine.Color}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Dosage === "") ?
null
:
      <Table.Row>
        <Table.Cell>Dosage</Table.Cell>
        <Table.Cell>{this.state.wine.Dosage}</Table.Cell>
      </Table.Row>
}
{ (this.state.wine.Years_in_Blend === "") ?
null
:
      <Table.Row>
        <Table.Cell>Years in Blend</Table.Cell>
        <Table.Cell>{this.state.wine.Years_in_Blend}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Bottling_Date === "") ?
null
:
      <Table.Row>
        <Table.Cell>Bottling Date</Table.Cell>
        <Table.Cell>{this.state.wine.Bottling_Date}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Disgorgement_Date === "") ?
null
:
      <Table.Row>
        <Table.Cell>Disgorgement Date</Table.Cell>
        <Table.Cell>{this.state.wine.Disgorgement_Date}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Closure === "") ?
null
:
      <Table.Row>
        <Table.Cell>Closure</Table.Cell>
        <Table.Cell>{this.state.wine.Closure}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Annual_cases_produced === "") ?
null
:
      <Table.Row>
        <Table.Cell>Annual Cases Produced</Table.Cell>
        <Table.Cell>{this.state.wine.Annual_cases_produced}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Varieties === "") ?
null
:
      <Table.Row>
        <Table.Cell>Varieties</Table.Cell>
        <Table.Cell>{this.state.wine.Varieties}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Maceration_Notes === "") ?
null
:
      <Table.Row>
        <Table.Cell>Maceration Notes</Table.Cell>
        <Table.Cell>{this.state.wine.Maceration_Notes}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Pumpover_Punchdown === "") ?
null
:
      <Table.Row>
        <Table.Cell>Pumpover / Punchdown</Table.Cell>
        <Table.Cell>{this.state.wine.Pumpover_Punchdown}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Destemming === "") ?
null
:
      <Table.Row>
        <Table.Cell>Destemming</Table.Cell>
        <Table.Cell>{this.state.wine.Destemming}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Fermentation_vessel === "") ?
null
:
      <Table.Row>
        <Table.Cell>Fermentation Vessel</Table.Cell>
        <Table.Cell>{this.state.wine.Fermentation_vessel}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Fermentation_duration === "") ?
null
:
      <Table.Row>
        <Table.Cell>Fermentation Duration (months)</Table.Cell>
        <Table.Cell>{this.state.wine.Fermentation_duration}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Aging_method === "") ?
null
:
      <Table.Row>
        <Table.Cell>Aging Method</Table.Cell>
        <Table.Cell>{this.state.wine.Aging_method}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Aging_duration_months === "") ?
null
:
      <Table.Row>
        <Table.Cell>Aging Duration (months)</Table.Cell>
        <Table.Cell>{this.state.wine.Aging_duration_months}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Filtered === "") ?
null
:
      <Table.Row>
        <Table.Cell>Filtered</Table.Cell>
        <Table.Cell>{this.state.wine.Filtered}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Fining_Agents === "") ?
null
:
      <Table.Row>
        <Table.Cell>Fining Agent</Table.Cell>
        <Table.Cell>{this.state.wine.Fining_Agents}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Yeast === "") ?
null
:
      <Table.Row>
        <Table.Cell>Yeast</Table.Cell>
        <Table.Cell>{this.state.wine.Yeast}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Lees_Contact_Stirring === "") ?
null
:
      <Table.Row>
        <Table.Cell>Lees Contact</Table.Cell>
        <Table.Cell>{this.state.wine.Lees_Contact_Stirring}</Table.Cell>
      </Table.Row>
}
{ (this.state.wine.Malolactic === "") ?
null
:
      <Table.Row>
        <Table.Cell>Malolactic Fermentation</Table.Cell>
        <Table.Cell>{this.state.wine.Malolactic}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Added_Sulfur === "") ?
null
:
      <Table.Row>
        <Table.Cell>Added Sulfur</Table.Cell>
        <Table.Cell>{this.state.wine.Added_Sulfur}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Vineyard_Name === "") ?
null
:
      <Table.Row>
        <Table.Cell>Vineyard Name, Meaning</Table.Cell>
        <Table.Cell>{this.state.wine.Vineyard_Name}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Soil_Type === "") ?
null
:
      <Table.Row>
        <Table.Cell>Soil Type(s)</Table.Cell>
        <Table.Cell>{this.state.wine.Soil_Type}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Elevation_meters === "") ?
null
:
      <Table.Row>
        <Table.Cell>Elevation (meters)</Table.Cell>
        <Table.Cell>{this.state.wine.Elevation_meters}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Vineyard_Aspect === "") ?
null
:
      <Table.Row>
        <Table.Cell>Vineyard Aspect</Table.Cell>
        <Table.Cell>{this.state.wine.Vineyard_Aspect}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Vine_Age_years === "") ?
null
:
      <Table.Row>
        <Table.Cell>Vine Age (average)</Table.Cell>
        <Table.Cell>{this.state.wine.Vine_Age_years}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Vine_Yields_hl_ha === "") ?
null
:
      <Table.Row>
        <Table.Cell>Vine Yield (Hl/Ha)</Table.Cell>
        <Table.Cell>{this.state.wine.Vine_Yields_hl_ha}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Farming_practices === "") ?
null
:
      <Table.Row>
        <Table.Cell>Farming Practices</Table.Cell>
        <Table.Cell>{this.state.wine.Farming_practices}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Vine_Training_Notes === "") ?
null
:
      <Table.Row>
        <Table.Cell>Vine Training Notes</Table.Cell>
        <Table.Cell>{this.state.wine.Vine_Training_Notes}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Grape_Picking === "") ?
null
:
      <Table.Row>
        <Table.Cell>Grape Picking</Table.Cell>
        <Table.Cell>{this.state.wine.Grape_Picking}</Table.Cell>
      </Table.Row>
}

{ (this.state.wine.Notes === "") ?
null
:
      <Table.Row>
        <Table.Cell>Notes</Table.Cell>
        <Table.Cell>{this.state.wine.Notes}</Table.Cell>
      </Table.Row>
}


    </Table.Body>


  </Table>



        {/* {this.state.wines.length ? (
              <List>
                {this.state.wines.map(wine => (
                  <Grid>
                    <Winecard />
                   <DataWine 
                   header={wine.Wine} 
                   producer={wine.Producer} 
                   country={wine.Country} 
                   region={wine.Region} 
                   subregion={wine.Subregion}
                   color={wine.Color}
                   abv={wine.Alcohol_by_volume}
                   acidity={wine.Acidity}
                   residualsugar={wine.Residual_Sugar}
                   dosage={wine.Dosage}
                   blend={wine.Years_in_Blend}
                   bottling={wine.Bottling_Date}
                   disgorgement={wine.Disgorgement_Date}
                   closure={wine.Closure}
                   annual={wine.Annual_cases_produced}
                   varieties={wine.Varieties}
                   maceration={wine.Maceration_Notes}
                   pumpover={wine.Pumpover_Punchdown}
                   destem={wine.Destemming}
                   fermentation_vessel={wine.Fermentation_vessel}
                   fermentation_duration={wine.Fermentation_duration}
                   agingmethod={wine.Aging_method}
                   agingmonths={wine.Aging_duration_months}
                   filtered={wine.Filtered}
                   fining={wine.Fining_Agents}
                   yeast={wine.Yeast}
                   lees={wine.Lees_Contact_Stirring}
                   malo={wine.Malolactic}
                   sulfur={wine.Added_Sulfur}
                   vineyard={wine.Vineyard_Name}
                   soil={wine.Soil_Type}
                   elevation={wine.Elevation_meters}
                   aspect={wine.Vineyard_Aspect}
                   vineage={wine.Vine_Age_years}
                   vineyields={wine.Vine_Yields_hl_ha}
  
                   />

                  </Grid>
                ))}
               
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}


     </Grid>
 
    );
  }
}

export default OneWine;
