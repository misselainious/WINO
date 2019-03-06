import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'r', text: 'Red', value: 'Red' },
  { key: 'w', text: 'White', value: 'White' },
  { key: 's', text: 'Sparkling', value: 'Sparkling' },
  { key: 'r', text: 'Rose', value: 'Rose' },
  { key: 'd', text: 'Dessert', value: 'Dessert' },
]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Producer name' placeholder='Producer name' />
          <Form.Input fluid label='Wine name' placeholder='Wine name' />
          <Form.Select
            fluid
            label='Color'
            options={options}
            placeholder='Color'
          />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label='Small'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Medium'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Large'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl