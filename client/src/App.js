import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Responsive } from "semantic-ui-react";
import Home from "./pages/home";
import AllWines from "./pages/allwines";
import Admin from "./pages/admin";
import Producers from "./pages/producers";
import AboutUs from "./pages/aboutus";
import Login from "./pages/login";
import AuthService from './components/login/AuthService';

// import Onewine from "./pages/onewine";
// import Wrapper from "./components/Wrapper";

import DesktopContainer from "./components/common/DesktopContainer/DesktopContainer";
import MobileContainer from "./components/common/MobileContainer/MobileContainer";
import Footer from "./components/common/Footer/Footer";
import OneWine from "./pages/onewine";
import OneProducer from "./pages/oneproducer";
import OtherHeading from "./components/Homepage/HomeHeading/OtherHeading";
import ErrorPage from "./pages/errorpage";



const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer getWidth={getWidth}>{children}</DesktopContainer>
    <MobileContainer getWidth={getWidth}>{children}</MobileContainer>
  </div>
)

const authService = new AuthService();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    // sessionStorage.setItem('referrer', window.location.pathname);
    return (
    authService.loggedIn()
      ? <Component {...props} />
      : <Redirect to='/login' />
    )}
  } />
)

class App extends Component {

  state = {
    wines: [],
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.location !== this.props.location) {
  //     this.setState({ prevPath: this.props.location })
  //   }
  // }

  render() {
    // console.log('is logged in', authService.loggedIn());
    return (
        <Router>
          <ResponsiveContainer>
            <OtherHeading />
            <PageSwitch/>
            <Footer />
          </ResponsiveContainer>
        </Router>
    );
  }
}

const PageSwitch = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/allwines" component={AllWines} />
      <PrivateRoute path="/admin" component={Admin} />
      <Route path="/details/:id" component={OneWine} />
      <PrivateRoute path="/producers" component={Producers} />
      <Route path="/producerdetails/:id" component={OneProducer} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/login" component={Login}/>
      <Route path="*" component={ErrorPage} />
    </Switch>
  )
}


export default App;