import React, { Component } from "react";
// import Container from "../components/Container";
import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { DataProducer} from "../components/DataProducerTable";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Producercard from "../components/ProducerCard"

class Producers extends Component {
  state = {
    Producers: []
  };

  componentDidMount() {
    this.loadProducers();
  }


loadProducers = () => {
  API.getProducers()
    .then(res => {
      console.log("Producers: ", res)
      this.setState({ Producers: res.data })
    }
    )
    .catch(err => console.log(err));
};

  render() {
    const countries=["Germany","France","Austria","Spain","Portugal","Greece"]
    return (
    //  <Container>
     <Grid>
        {/*CheckboxSidebar renders with a double layered array*/}
        <CheckboxSidebar checkableArrays={[countries]} />
        

        {this.state.Producers.length ? (
              <List>
                {this.state.Producers.map(producer => (
                  <Grid>
                      <Producercard header={producer.Producer}city={producer.city_of_origin}/>
                  </Grid>
                ))}
               
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

     </Grid>
    );
  }
}

export default Producers;