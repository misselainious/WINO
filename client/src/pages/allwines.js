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
    isLoading: false, 
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
  this.setState({
    isLoading: true
  })
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
    const filterArray = this.state.filters[event.target.getAttribute("data-Filter")];
    filterArray.push(event.target.value);
    this.setState({
      filters: {
        [event.target.getAttribute("data-filter")]: filterArray
      }
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
    return (
    //  <Container>
     <Grid>
        {/*CheckboxSidebar renders with a double layered array*/}
        <CheckboxSidebar checkableArrays={filterElements} handleFilterChange={this.handleFilterChange} />
        

        {this.state.wines.length ? (
              <List>
                <Grid>
                  <GridRow columns='three'>
                  

                
                {this.state.wines.map(wine => (
                  
                    
                    <Winecard header={wine.Wine} producer={wine.Producer} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} />
                  //   {/* <Card.Group>
                  //   <Card>
                  //     <Card.Content>
                  //       <Image floated='right' size='mini' src='' />
                  //       <Card.Header>{wine.Wine}</Card.Header>
                  //       <Card.Meta>{wine.Producer}</Card.Meta>
                  //       <Card.Meta>{wine.Country}</Card.Meta>
                  //       <Card.Meta>{wine._id}</Card.Meta>
                  //       <Card.Description>
                  //         {wine.Notes}
                  //       </Card.Description>
                  //     </Card.Content>
                  //   </Card>
                  // </Card.Group> */}

                 
                ))}
                
                </GridRow>
                </Grid>
              </List>
    
            ) : (
              <h3>{this.state.isLoading ? "loading...": "No results to display"}</h3>
            )}



            

     </Grid>
    //  </Container>
    );
  }
}

export default Wines;
