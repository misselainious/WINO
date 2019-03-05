import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
// import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
// import Home from "./pages/home";
import AllWines from "./pages/allwines";
import Admin from "./pages/admin";
import Onewine from "./pages/onewine";
// import Wrapper from "./components/Wrapper";
// import Footer from "../src/components/Footer";

class App extends Component {

  render() {
    return (

      <Router>
        {/* <Grid>
          <Homepage />
        </Grid> */}

        <Grid>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/allwines" component={AllWines} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/wine/:id" component={Onewine} />
            {/* <Route exact path="/producers" component={Producers} />
             <Route exact path="/aboutus" component={AboutUs} /> */}
          </Switch>
        </Grid>
      </Router>

    );
  }
}


export default App;