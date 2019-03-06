import React from "react";
import HomeHeading from "../components/Homepage/HomeHeading/HomeHeading";
// import Carousel from "../components/common/Carousel/Carousel";
// import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';


const Home = () => (
  // <ResponsiveContainer>
  <React.Fragment>

    <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 700, padding: '1em 0em', backgroundImage: `url("./images/redPouring.jpg")` }}
      vertical
    >

      <HomeHeading />
      {/* <Carousel /> */}
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Wine Wise: The Vienna Wine Company
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Since 1989, Wine Wise has been importing some of the finest estate-grown wines from France, Germany, Austria, Spain, Portugal and Greece. Our speciality is small family-firms that offer over-performing wines and exceptional value. Grower Champagnes and other sparkling wines are a particular area of emphasis for Wine Wise.
            </p>
           
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/winePouring.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>See All Wines</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            "A gourmet meal without a glass of wine just seems tragic to me somehow."
            </Header>
            <p style={{ fontSize: '1.33em' }}>- Kathy Mattea</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            "The discovery of a good wine is increasingly better for mankind than the discovery of a new star."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='./images/daVinci.jpg' />
              <b>Leonardo</b> Da Vinci

            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Our Mission
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          The philosophy of Wine Wise is straightforward: we seek wines of character from people we like and places which are not always well-known or popular. We are not averse to the classics, but we are not scared of the obscure. Our wines do not have to meet any ideological litmus test, but we do have to like them. If they are grown organically it does not hurt, but we don’t insist on it. While we have a number of sought-after and expensive wines in our portfolio, our animating force is the acquisition of great wines that almost anyone can afford to drink – a rather more exacting discipline than the converse. Above all, we like people. Our growers tend to be interesting and often amusing people, sometimes with a spiritual bent, sometimes unrepentantly earthy. We have watched with pleasure as the sons and daughters we knew as babies and children have grown up to be the proprietors of their parents’ estates. We like to think of ourselves as the link between these friends and the people drinking their wines in restaurants or at home. We have developed from an essentially one-man band into a team with a dozen or so sales representatives spanning virtually the entire state of California and a small phalanx of impossibly clever people handling the many functions that lie beyond the principals’ capabilities. We are very lucky people!
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='http://winewise.biz/'>Wine Wise</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Wine of the Month
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          maybe something super hip about the winery goes here
        </p>
        <Button as='a' size='large'>
          Become a Member
        </Button>
      </Container>
    </Segment>
   
  </React.Fragment>
  // </ResponsiveContainer>
)
export default Home;
