import React from 'react';

import { Button, Container, Menu } from 'semantic-ui-react';

const Navbar = props => {
  const fixed = props.fixed;
  return (
   
    <Menu
      fixed={fixed ? 'top' : null}
      inverted={!fixed}
      pointing={!fixed}
      secondary={!fixed}
      size='large'
      color='red'
    >
      <Container>
        <Menu.Item as='a' active>
          Home
        </Menu.Item>
        <Menu.Item as='a'>All Wines</Menu.Item>
        <Menu.Item as='a'>Producers</Menu.Item>
        <Menu.Item as='a'>About Us</Menu.Item>
        <Menu.Item position='right'>
          <Button as='a' inverted={!fixed}>
            Register
          </Button>
          <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
            Members
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navbar;