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
      }}
    />
    <Header
      as='h2'
      content='company logo or slogan here'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

HomeHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeHeading;