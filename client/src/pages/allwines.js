import React, { Component } from "react";
// import Container from "../components/Container";
import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { DataWine} from "../components/DataWineTable";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";



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
      console.log("WInes: ", res)
      this.setState({ wines: res.data, code: "", producer: "", notes: "" })
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
                   <DataWine header={wine.Wine} producer={wine.Producer} country={wine.Country} region={wine.Region} subregion={wine.Subregion}/>
                  {/* <ListItem key={wine._id}>
                    <Link to={"/wines/" + wine._id}>
                      <strong>
                        {wine.Code} by { wine.Producer } and also { wine.Country }
                      </strong>
                    </Link>
                  
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
