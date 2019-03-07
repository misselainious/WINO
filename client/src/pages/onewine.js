import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { DataWine} from "../components/DataWineTable";
import { Link } from "react-router-dom";
import { Grid, Table} from "semantic-ui-react";
import Winecard from "../components/WineCard"


class OneWine extends Component {
  state = {
    wine: {}
  };

  componentDidMount() {
    API.getWine(this.props.match.params.id)
      .then(res => this.setState({ wine: res.data }))
      .catch(err => console.log(err));
  }


    
 
//HANDLE Blah-blah-blah

render() {

    const { wine } = this.state;
    delete wine._id
    const wineObjKeys = Object.keys(wine);

    return (

     <Grid>
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="2">{this.state.wine.Wine}</Table.HeaderCell>
        {/* <Table.HeaderCell>Header</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>

        {
            wineObjKeys.map(key => 
                    wine[key] && <Table.Row key={key}>
                        <Table.Cell>{key}</Table.Cell>
                        <Table.Cell>{wine[key]}</Table.Cell>
                    </Table.Row>
            )
        }

      }


    </Table.Body>
  </Table>


     </Grid>
 
    );
  }
}

export default OneWine;
