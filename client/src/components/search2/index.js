import React, { Component } from "react";
import { render } from "react-dom";
import { Search } from "semantic-ui-react";
import API from '../../utils/API'
import _ from "lodash";
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

    resetComponent = () =>
    this.setState({ isLoading: false, wines: [], value: "" });

    componentDidMount() {
        this.loadWines();
      }
      loadWines = () => {
        API.getWines()
          .then(res => {
            this.setState({ wines: res.data })
          })
          .catch(err => console.log(err));

          setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();
      
            const re = new RegExp(_.escapeRegExp(this.state.value), "i");
            //what is being tested for in search input
            const isMatch = result => re.test(result.Producer);
      
            this.setState({
              isLoading: false,
              wines: _.filter(this.state.wines, isMatch)
            });
          }, 300);
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
