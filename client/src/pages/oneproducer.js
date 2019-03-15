import React, { Component } from "react";
import API from "../utils/API";
// import { List, ListItem } from "../components/List";
import { DataProducer} from "../components/DataWineTable";
import { Link } from "react-router-dom";
import { Grid, Table, List, Header} from "semantic-ui-react";
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

      API.getWines()
      .then(res => {
        let data = res.data
        data = data.filter((item) => item.Producer == this.state.producer.Producer)
        this.setState({ wines: data })
      })
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
       <Grid.Row>
         <Grid.Column width={8}>
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
        </Grid.Column>
         </Grid.Row>
         <Header as='h3'>{this.state.producer.Producer}'s Wines</Header>
       
        <Grid.Row>
          

          <Grid.Column width={8}>
          
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
 
    );
  }
}

export default OneProducer;
