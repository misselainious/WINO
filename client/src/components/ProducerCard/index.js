import React from 'react'
import { Link } from "react-router-dom";
import { Card, Button} from 'semantic-ui-react'

const Producercard = (props) => {
  return (
<Card className="card">
    <Card.Content>
      <Card.Header>{props.producer} {props.header}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.country} <br/> {props.region}</span>
      </Card.Meta>
      <Card.Description> 
      {props.producer.country}
        <Link to={"/producerdetails/" + props.id}>
          <Button basic color='red'>View Producer</Button>
        </Link> </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default Producercard
