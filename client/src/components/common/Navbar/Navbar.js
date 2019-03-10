import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu} from 'semantic-ui-react';
import SearchBar from "../../SearchBar/index"

// import SB from "../../search2/index"
// import "./Navbar.css";

const Navbar = props => {
  const fixed = props.fixed;
  return (
   
    <Menu
      fixed={fixed ? 'top' : null}
      inverted={!fixed}
      pointing={!fixed}
      secondary={!fixed}
      size='large'
      style={{ padding: '2em 0em' }}
      color='red'
    >
      <Container>
        <Link to="/"><Menu.Item className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Menu.Item></Link>
        <Link to="/allwines"><Menu.Item className={window.location.pathname === "/allwines" ? "nav-link active" : "nav-link"}>All Wines</Menu.Item></Link>
        <Link to="/producers"><Menu.Item className={window.location.pathname === "/producers" ? "nav-link active" : "nav-link"}>Producers</Menu.Item></Link>
        <Link to="/aboutus" ><Menu.Item className={window.location.pathname === "/aboutus" ? "nav-link active" : "nav-link"}>About Us</Menu.Item></Link>
        <Menu.Item position="center">
          <SearchBar />
        </Menu.Item>
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