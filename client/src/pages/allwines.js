import React, { Component } from "react";
// import Container from "../components/Container";
import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List } from "../components/List";
import { DataWine} from "../components/DataWineTable";
// import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Winecard from "../components/WineCard"



class Wines extends Component {
  state = {
    wines: []
  };

  componentDidMount() {
    this.loadWines();
  }


loadWines = () => {
  API.getWines()
    .then(res => {
      console.log("Wines: ", res)
      this.setState({ wines: res.data })
    }
    )
    .catch(err => console.log(err));
};

//HANDLE Blah-blah-blah

  render() {
    const countries=["Germany","France","Austria","Spain","Portugal","Greece"]
    const colors=["Rose","White","Red"]
    const regions=["region1","region2","region3"]
    const producers=["producer1","producer2","producer3","producer4",]
    return (
    //  <Container>
     <Grid>
        {/*CheckboxSidebar renders with a double layered array*/}
        <CheckboxSidebar checkableArrays={[countries,colors,regions,producers]} />
        

        {this.state.wines.length ? (
              <List>
                {this.state.wines.map(wine => (
                  <Grid>
                    <Winecard header={wine.Wine} producer={wine.Producer} country={wine.Country} wineid={wine._id} />
                   
                    {/* <Link to={"/details/" + wine._id}>
                      <strong>
                        {wine.Code} by { wine.Producer } and also { wine.Country }
                      </strong>
                    </Link> */}

                   {/* <DataWine 
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
  
                   /> */}


                  {/* <ListItem key={wine._id}>
              
                  </ListItem> */}

                  </Grid>
                ))}
               
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}





     </Grid>
    //  </Container>
    );
  }
}

export default Wines;
