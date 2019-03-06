import React, { Component } from "react";
// import Container from "../components/Container";
import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { DataProducer} from "../components/DataProducerTable";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
// import Producercard from "../components/ProducerCard"

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

//HANDLE Blah-blah-blah

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

                  <ListItem key={producer._id}>
                    <Link to={"/producers/" + producer._id}>
                      <strong>
                        {producer.Producer} founded in { producer.Date_Founded } in the country of { producer.Country }
                      </strong>
                    </Link>
                  
                  </ListItem>
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

// producer: String,
// date_founded: String,
// property_history: String,
// owner_history: String,
// owner_name: String,
// other_important_people: String,
// vineyard_size_ha: Number,
// total_annual_production: String,
// city_of_origin: String,
// region: String,
// subregion: String,
// country: String

export default Producers;