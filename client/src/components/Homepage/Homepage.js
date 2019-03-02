import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Header,
} from 'semantic-ui-react';


const Homepage = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Wise Wine'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='our app will be the best'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    {/* <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button> */}
  </Container>
)

Homepage.propTypes = {
  mobile: PropTypes.bool,
}

export default Homepage;