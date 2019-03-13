import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu} from 'semantic-ui-react';
import "./index.css";

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
    >
      <Container className="navbarcustomstyle">
        <img src="../images/winewisehead.png" alt="owlhead" className="owlHeadLogo"/>
      <Link to="/"><Menu.Item className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}><p>Wine Wise</p></Menu.Item></Link>
        <Link to="/allwines"><Menu.Item className={window.location.pathname === "/allwines" ? "nav-link active" : "nav-link"}><p>All Wines</p></Menu.Item></Link>
        <Link to="/producers"><Menu.Item className={window.location.pathname === "/producers" ? "nav-link active" : "nav-link"}><p>Producers</p></Menu.Item></Link>
        <Link to="/aboutus" ><Menu.Item className={window.location.pathname === "/aboutus" ? "nav-link active" : "nav-link"}><p>About Us</p></Menu.Item></Link>
        <Menu.Item position='right'>
          <Button as='a' color='red' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
            <p>Register</p>
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navbar;