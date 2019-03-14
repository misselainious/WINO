import _ from "lodash";
// import faker from "faker";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import API from '../../utils/API'
import { Link } from "react-router-dom"


export default class SearchBar extends Component {

    state = {
        producers: []
    }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, producers: [], value: "" });

    //What shows on the results bar when you click on it:
  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.Producer });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    API.getProducers()
      .then(res => {
        this.setState({ producers: res.data }) 
      }
      )
      .catch(err => console.log(err));
    
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      //what is being tested for in search input
      const isMatch = result => re.test(result.producer);

      this.setState({
        isLoading: false,
        wines: _.filter(this.state.producers, isMatch)
      });
    }, 300);
  };

  render() {
    
    const { isLoading, value, producers } = this.state;

    const resRender = ({ Producer, _id }) => (
      <Link to={"/producerdetails/" + _id}>
        <span key="name">
        {Producer}
        </span>
      </Link>
    );


    return (
      <Grid style={{marginLeft: "auto", marginRight: "auto"}}>
        {/* <Grid.Row>
          <Header>
            <h5 style={{marginLeft: 20}}>Search Our Producers</h5>
          </Header>
        </Grid.Row> */}
        <Grid.Column width={6}>
          <Search
            placeholder="Search producers..."
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={producers}
            value={value}
            resultRenderer={resRender}
          />
        </Grid.Column>

      </Grid>
    );
  }
}
