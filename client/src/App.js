import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
// import Home from "./pages/home";
// import AllWines from "./pages/allwines";
// import Wrapper from "./components/Wrapper";
// import Footer from "../src/components/Footer";

class App extends Component {
 render() {
   return (
     <Grid>
       <Navbar />
       <Homepage />
     </Grid>
   );
 }
}
// function App() {
//   return (
//     <Router>
//       <div>
//         <Wrapper>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/allwines" component={AllWines} />
//           {/* <Route exact path="/about" component={About} /> */}
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }



export default App;
