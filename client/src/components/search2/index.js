import React, { Component } from "react";
import { render } from "react-dom";
import { Search } from "semantic-ui-react";
import API from '../../utils/API'
const results = [
  {
    name: "John",
    age: 14
  },
  {
    name: "Mary",
    age: 92
  }
];
class SB extends Component {

    state = {
        wines: []
    }


    componentDidMount() {
        this.loadWines();
      }
      loadWines = () => {
        API.getWines()
          .then(res => {
            this.setState({ wines: res.data })
          })
          .catch(err => console.log(err));
      };
      
  render() {
    const resRender = ({ Code, Producer }) => (
      <span key="name">
        {Code}, {Producer} 
      </span>
    );
    return (
      <Search
        fluid
        icon="search"
        placeholder="Search..."
        results={this.state.wines}
        resultRenderer={resRender}
      />
    );
  }
}

export default SB
