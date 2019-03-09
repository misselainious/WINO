import React, { Component } from "react";
// import Container from "../components/Container";
import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List } from "../components/List";
import { DataWine} from "../components/DataWineTable";
// import { Link } from "react-router-dom";
import { Grid, GridRow } from "semantic-ui-react";
import Winecard from "../components/WineCard"



class Wines extends Component {
  state = {
    wines: [], 
    filters: {
      countries: [],
      colors: [],
      regions: [],
      producers: []
    }
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
handleFilterChange = event => {
  console.log('event.target', event.target);
  if (event.target.checked) {
    //define the selected filter
    const selectedFilter =event.target.getAttribute("data-filter");
    const filterArray = this.state.filters[selectedFilter];
    filterArray.push(event.target.value);
    //the bug seems to come from set state, we're accidentally getting rid of all the other arrays
    //we will need to use the previous state
    let oldFilters=this.state.filters
    oldFilters[selectedFilter]=filterArray
    this.setState({
      filters: oldFilters
    })
  } else {
    const filterArray = this.state.filters[event.target.getAttribute("data-Filter")].filter(elem => elem !== event.target.value);
    this.setState({
      filters: {
        ...this.state.filters,
        [event.target.getAttribute("data-Filter")]: filterArray
      }
    })
  }
}

  render() {
    const countries=["Germany","France","Austria","Spain","Portugal","Greece"]
    const colors=["Rose","White","Red"]
    const regions=["region1","region2","region3"]
    const producers=["producer1","producer2","producer3","producer4",];
    const filterElements = [{
      filterType: "countries",
      elements: countries
    }, {
      filterType: "colors",
      elements: colors
    }, {
      filterType: "regions",
      elements: regions
    },{
      filterType: "producers",
      elements: producers
  }]
  //should filter so that at least one of the elements is the selected ones
  //TEST THOURGHLY, THIS WILL BE BUGGY
  let wineList=this.state.wines.filter( wine => 
    (this.state.filters["producers"].includes(wine.Producer) || this.state.filters["colors"].includes(wine.Color) 
    ||this.state.filters["regions"].includes(wine.Region) ||this.state.filters["countries"].includes(wine.Country) )
    )
  
    return (
     <Grid>
        {/*CheckboxSidebar renders with a double layered array*/}
        <CheckboxSidebar checkableArrays={filterElements} handleFilterChange={this.handleFilterChange} />
        {wineList.length ? (
              <List>
                <Grid>
                  <GridRow columns='three'>
                {wineList.map(wine => (    
                    <Winecard header={wine.Wine} producer={wine.Producer} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} />
                ))}
                
                </GridRow>
                </Grid>
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
