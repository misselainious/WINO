import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { DataProducer} from "../components/DataWineTable";
import { Link } from "react-router-dom";
import { Grid, Table} from "semantic-ui-react";

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

      API.getProducerWines(this.state.producer.Producer)
      .then(res => this.console.log({ wines: res.data }))
      .then(res => this.setState({ wines: res.data }))
      .catch(err => console.log(err));

  }

render() {
    const { producer } = this.state;
    delete producer._id
    const producerObjKeys = Object.keys(producer)

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
      }
        </Table.Body>
        </Table>
        <h1></h1>
    </Grid>
 
    );
  }
}

export default OneProducer;
