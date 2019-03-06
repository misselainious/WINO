import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import API from "../utils/API";
const options = [
  { key: 'r', text: 'Red', value: 'Red' },
  { key: 'w', text: 'White', value: 'White' },
  { key: 's', text: 'Sparkling', value: 'Sparkling' },
  { key: 'ro', text: 'Rose', value: 'Rose' },
  { key: 'd', text: 'Dessert', value: 'Dessert' },
]
const countryOptions =[
  {key: 'f', text: 'France', value: 'France'},
  { key: 'g', text: 'Greece', value: 'Greece' },
  { key: 's', text: 'Spain', value: 'Spain' },
  { key: 'p', text: 'Portugal', value: 'Portugal' },
]


import {
Segment,
Form,
Input
} from 'semantic-ui-react'

class Admin extends Component {
  state = {
    producer: "",
    wine: "",
    region: "",
    subregion: "",
    code: "",
    description: ""
  };

  handleInputChange = (event, { value }) =>{
    //this will capture form input
    this.setState({ [event.target.name]: event.target.value });
  }
  // separate onChange methods to assign state for Select form values
  handleSelectCountryChange=(e,{value})=>this.setState({country:value})
  handleSelectColorChange=(e,{value})=>this.setState({color:value})

  handleFormSubmit = event => {
    console.log(this);
    event.preventDefault();
    if (this.state.producer) {
      API.saveWine({
        producer: this.state.producer,
        wine: this.state.wine,
        color: this.state.color,
        country: this.state.country,
        code: this.state.code,
        region: this.state.region,
        subregion: this.state.subregion,
        description: this.state.description
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };
  render() {
    const { value } = this.state
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label= 'Producer' name='producer' placeholder='Producer' value={this.state.producer} onChange={this.handleInputChange}/>
          <Form.Input fluid label='Wine' name='wine' placeholder='Wine' value={this.state.wine} onChange={this.handleInputChange}/>
          <Form.Select
            fluid
            label='Color'
            name='color'
            options={options}
            placeholder='Color'
            // this should be value prop to capture form select instead of state
            value={value} 
            onChange={this.handleSelectColorChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Code' name='code' placeholder='Code' value={this.state.code} onChange={this.handleInputChange}/>
          <Form.Select
            fluid
            label='Country'
            // name='country'
            options={countryOptions}
            placeholder='Country'
            // this should be value prop to capture form select instead of state
            value={value}
            onChange={this.handleSelectCountryChange}
          />
          <Form.Input fluid label='Region' name= 'region' placeholder='Region' value={this.state.region} onChange={this.handleInputChange} />
          <Form.Input fluid label='Subregion' name='subregion' placeholder='Subregion' value={this.state.subregion} onChange={this.handleInputChange} />
        </Form.Group>
        <Form.TextArea label='Description' name='description' placeholder='Tell us more about you...' value={this.state.description} onChange={this.handleInputChange}/>
        <Form.Button
          disabled={!(this.state.producer && this.state.code)}
          onClick={this.handleFormSubmit}
        >
          Submit</Form.Button>
      </Form>
    )
  }
}

export default Admin
