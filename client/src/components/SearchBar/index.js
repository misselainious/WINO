import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import API from '../../utils/API'

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, "$")
}));

export default class SearchBar extends Component {

    state = {
        wines: []
    }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, wines: [], value: "" });

    //What shows on the results bar when you click on it:
  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.Producer });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    API.getWines()
      .then(res => {
        this.setState({ wines: res.data }) 
      }
      )
      .catch(err => console.log(err));
    
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.Producer);

      this.setState({
        isLoading: false,
        wines: _.filter(this.state.wines, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, wines } = this.state;

    // const resRender = ({ Code, Producer }) => (
    //   <span key="name">
    //     {Code}, {Producer} 
    //   </span>
    // );

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={wines}
            value={value}
            // {...this.props}
            {...this.state.wines.Producer}
            // resRender={resRender}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify(this.state.wines, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
