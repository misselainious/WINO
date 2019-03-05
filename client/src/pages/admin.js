import React, { Component } from "react";
// import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

import {
Segment,
Form,
Input
} from 'semantic-ui-react'

class Admin extends Component {
    state = {
        wines: [],
        code: "",
        country: "",
        notes: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.code) {
          API.saveWine({
            code: this.state.code,
            country: this.state.country,
            notes: this.state.notes
          })
            .catch(err => console.log(err));
        }
      };

        render() {
          return (
            <Segment>
                  <Form>
                    <Form.Group>
                    <Form.Input
                      value={this.state.code}
                      onChange={this.handleInputChange}
                      name="code"
                      placeholder="code (required)"
                      class="forminput"
                    />
                    <Form.Input
                      value={this.state.country}
                      onChange={this.handleInputChange}
                      name="country"
                      placeholder="country (required)"
                      class="forminput"
                    />
                    <Form.TextArea
                      value={this.state.notes}
                      onChange={this.handleInputChange}
                      name="notes"
                      placeholder="notes (Optional)"
                    />
                    <Form.Button
                      // disabled={!(this.state.country && this.state.code)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit Wine
                    </Form.Button>
                    </Form.Group>
                  </Form>
              </Segment>
          );
        }
      }

  
  export default Admin;
  

