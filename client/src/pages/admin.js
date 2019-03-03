import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../components/utils/API";

class Admin extends Component {
    state = {
        books: [],
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
            // .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };
  
    render() {
      return (
        
              <form>
                <Input
                  value={this.state.code}
                  onChange={this.handleInputChange}
                  name="code"
                  placeholder="code (required)"
                />
                <Input
                  value={this.state.country}
                  onChange={this.handleInputChange}
                  name="country"
                  placeholder="country (required)"
                />
                <TextArea
                  value={this.state.notes}
                  onChange={this.handleInputChange}
                  name="notes"
                  placeholder="notes (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.country && this.state.code)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Wine
                </FormBtn>
              </form>
        
      );
    }
  }
  
  export default Admin;
  