import React, { Component } from "react";
import API from "../utils/API";
// import { List, ListItem } from "../components/List";
import { DataProducer} from "../components/DataWineTable";
import { Link } from "react-router-dom";
import { Grid, Table, List} from "semantic-ui-react";
import Winecard from "../components/WineCard"

class OneProducer extends Component {
  state = {
    producer: {},
    wines: []
  };
  removeUnderscores(myString){
    return myString.split("_").join(" ")
  }


  


  componentDidMount() {
    API.getProducer(this.props.match.params.id)
      .then(res => this.setState({ producer: res.data }))
      .catch(err => console.log(err))

      API.getWines(this.state.producer.Producer)
      .then(res => {
        let selectWines = [];
        if(this.state.producer.Producer === res.Producer){
          selectWines.push(res.data)
        }
        this.setState({ wines: selectWines })})
      .catch(err => console.log(err));

  }

render() {
    const { producer } = this.state;
    delete producer._id
    const producerObjKeys = Object.keys(producer).filter(key => key!=='URL');
    let producerWines = this.state.wines

    // let returnWines = producerWines.filter(this.state.producer.Producer === this.state.wines.Producer)

    return (
     <Grid>
        <Table celled>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell colSpan="2">{this.state.producer.Producer}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        <Table.Body>
        {
            producerObjKeys.map(key => 
                    producer[key] && <Table.Row key={key}>
                        <Table.Cell>{this.removeUnderscores(key)}</Table.Cell>
                        <Table.Cell>{producer[key]}</Table.Cell>
                    </Table.Row>
            )
        }
      
        </Table.Body>
        </Table>
        


        <Grid>
        {/*CheckboxSidebar renders with a double layered array*/}
        <Grid.Row>

          <Grid.Column width={12}>
          
            {producerWines.length ? (
              <List >
                <Grid >
                  <Grid.Row columns={4}>
                    {producerWines.map(wine => (
                      <Winecard header={wine.Wine} producer={wine.Producer} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} />
                    ))}
                  </Grid.Row>
                </Grid>
              </List>
            ) : (
                <h3>{this.state.isLoading ? "loading..." : "No results to display"}</h3>
              )}


          </Grid.Column>
        </Grid.Row>
      </Grid>






    </Grid>
 
    );
  }
}

export default OneProducer;
