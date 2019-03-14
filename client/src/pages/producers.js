import React, { Component } from "react";
// import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List } from "../components/List";
import { Grid } from "semantic-ui-react";
import Producercard from "../components/ProducerCard"
import SearchProducers from "../components/SearchProducers"

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
        //The World's least efficient way of alphabetizing an array of objects
        let idArray=[];
        res.data.map( producer => {idArray.push(producer.Producer)})
        idArray.sort()
        let alphabeticalProducers = []
        idArray.map( id => {
          alphabeticalProducers.push( res.data.find( (producer)=>{ return producer.Producer === id } ))
        })
        this.setState({ Producers: alphabeticalProducers })
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
                  <Grid.Row>
                      <center>
                          <SearchProducers />
                      </center>
                  </Grid.Row>   
                {this.state.Producers.map(producer => (
                    <Producercard id={producer._id} producer={producer.Producer} country={producer.Country} region={producer.Region} key={producer._id}/>            
                ))}
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
