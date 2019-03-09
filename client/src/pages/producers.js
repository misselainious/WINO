import React, { Component } from "react";
// import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List } from "../components/List";
import { Grid } from "semantic-ui-react";
import Producercard from "../components/ProducerCard"

class Producers extends Component {
    state = {
      Producers: [], 
      isLoading: false
    };
  
    componentDidMount() {
      this.loadProducers();
    }
  
  loadProducers = () => {
    this.setState({
      isLoading: true
    })
    API.getProducers()
      .then(res => {
        this.setState({ Producers: res.data })
      }
      )
      .catch(err => console.log(err));
  };
  
render() {
    return (
        <Grid>
        {this.state.Producers.length ? (
              <List>
                <Grid>
                  {/* <GridRow> */}        
                {this.state.Producers.map(producer => (
                    <Producercard producer={producer.Producer} country={producer.Country} region={producer.Region}/>            
                ))}
                
                {/* </GridRow> */}
                </Grid>
              </List> 
            ) : (
              <h3>{this.state.isLoading ? "loading...": "No results to display"}</h3>
            )}
     </Grid>
    );
  }
}

export default Producers;
