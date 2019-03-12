import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { DataWine} from "../components/DataWineTable";
import { Link } from "react-router-dom";
import { Grid, Table, Segment, Image, Header, Label, Icon, Button} from "semantic-ui-react";
import Winecard from "../components/WineCard"


class OneWine extends Component {
  state = {
    wine: {}
  };
  removeUnderscores(myString){
    return myString.split("_").join(" ")
  }
  componentDidMount() {
    API.getWine(this.props.match.params.id)
      .then(res => this.setState({ wine: res.data }))
      .catch(err => console.log(err));
  }

render() {

    const { wine } = this.state;
    delete wine._id
    const wineObjKeys = Object.keys(wine).filter(key => key!=='URL');

    // let wineList = wine
    // const FieldAdjuster = { "Alcohol_by_volume": "ABV", "Residual_Sugar": "Residual Sugar", "Years_in_Blend": "Years in Blend" }
    // // filter by each keyword if the filter is selected
    // for (let keyword of ["Years_in_Blend", "Alcohol_by_volume", "Residual_Sugar"]) {
    //   wineList = wineList.filter(wine => {
    //     return (
    //       (this.state.filters[keyword].length === 0) ||
    //       this.state.filters[keyword].includes(wine[FieldAdjuster[keyword]])
    //     )
    //   })
    // }

    return (
<Grid celled>
 <Grid.Row>

  <Grid.Column width={3}>
{/* Renders Photo of wine */}
  <Image >
            { (this.state.wine.URL === "") ?<Image src='/images/StockRED.png'/>
            :
            // Else Renders specific wine image
              <Image src={`https://gdurl.com${this.state.wine.URL}`}/>
            } 
  </Image>
{/* If the wine is Organic, puts a cute green leaf label */}
  { (this.state.wine.Farming_practices === "Organic") || (this.state.wine.Farming_practices === "Certified Organic" ) ?<Label as='a' color={'olive'}>
<Icon name='leaf' />Organic
</Label>
            :
            // Else Renders empty
            <div></div>
            }
{/* If the wine is Bio-dynamic, puts a cute blue moon label */}
  { (this.state.wine.Farming_practices === "Bio-dynamic") || (this.state.wine.Farming_practices === "Certified Bio-dynamic" ) ?<Label as='a' color={'blue'}>
<Icon name='moon' />Bio-dynamic
</Label>
            :
            // Else Renders empty
            <div></div>
            }
  </Grid.Column>

  <Grid.Column width={6}>
            <Header as='h2' attached='top'>
            {this.state.wine.Producer}
            </Header>
            <Segment attached>
            {this.state.wine.Wine}
            </Segment>
  </Grid.Column>

{/* TO DO: Need API call to get producer page */}
  {/* <Grid.Column width={2}>
   <Link to={"/producerdetails/" + this.state.wine._id}>
    <Button basic color='olive'>View Producer</Button>
   </Link>
  </Grid.Column> */}

 </Grid.Row>

 <Grid.Row>
  <Grid.Column width={8}>
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
                        <Table.Cell>{this.removeUnderscores(key)}</Table.Cell>
                        <Table.Cell>{wine[key]}</Table.Cell>
                    </Table.Row>
            )
        }
    </Table.Body>
   </Table>
  </Grid.Column>
 </Grid.Row>
</Grid>
 
    );
  }
}

export default OneWine;
