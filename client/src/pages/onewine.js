import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { DataWine} from "../components/DataWineTable";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
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

<h1>{this.state.wine.Code}</h1>
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
