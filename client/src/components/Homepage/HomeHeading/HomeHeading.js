import React from "react";
import PropTypes from "prop-types";
import { Container, Header } from "semantic-ui-react";

const HomeHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Wine Wise'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        fontFamily: 'Merriweather',
      }}
    />
    <Header
      image="../images/winewiselogo.png"
      className={'ui  image'}
    />
  </Container>
)

HomeHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeHeading;