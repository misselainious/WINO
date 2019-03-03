import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";


class Onewine extends Component {

    state = {
        wine: {}
      };

// componentDidMount() {
// this.loadWines();
// }

componentDidMount() {
    API.getWine(this.props.match.params.id)
      .then(res => this.setState({ wine: res.data }))
      .catch(err => console.log(err));
  }
    

render() {
    return(
    <div>
        <p>Code: {this.state.wine.code}</p>
        <p>Producer: {this.state.wine.producer}</p>

    </div>
    );
}
}

export default Onewine;