import React from 'react'
import { Link } from "react-router-dom";
import { Card, Grid, Image, Button} from 'semantic-ui-react'
import "./style.css";

const img = '/images/StockRED.png'

const Winecard = (props) => (
    
      <Grid.Column key={props.wineid}>
        <Card className="card" >
            <Image src= "/images/StockRED.png" />
            <Card.Content>
              <Card.Header>{props.producer} {props.header}</Card.Header>
              <Card.Meta>
                <span className='date'>{props.country}</span>
              </Card.Meta>
              <Card.Description> <Link to={"/details/" + props.wineid}>
                              <Button basic color='olive'>View Wine</Button>
                            </Link> </Card.Description>
            </Card.Content>
            {/* <Card.Content extra>
              <a>
                more here
              </a>
            </Card.Content> */}
          </Card>
        </Grid.Column>

)

export default Winecard


     