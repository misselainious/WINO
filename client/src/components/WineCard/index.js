import React from 'react'
import { Link } from "react-router-dom";
import { Card, Grid, Image, Button } from 'semantic-ui-react'
import "./Winecard.css";

const img = '/images/StockRED.png'

const Winecard = (props) => (

  <Grid.Column>
    <Card className="card" >
      {(props.url === "") ? <Image src='/images/StockRED.png' />
        :
        // Else Renders row with info
        <Image src={`https://gdurl.com${props.url}`} />
      }

      <Card.Content style={{textAlign: "center"}}>
        <Card.Header>{props.producer} {props.header}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.country}</span>
        </Card.Meta>
        <Card.Description> <Link to={"/details/" + props.wineid}>
          <Button className="seeAllWinesBtn" size='small'>
            <p className="seeAllWinesText">View Wine</p></Button>
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


