import React, { Component } from "react";
// import Container from "../components/Container";
import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar"



class Wines extends Component {
//   state = {
//     wines: []
//   };

//   componentDidMount() {
//     this.loadWines();
//   }

//HANDLE Blah-blah-blah

  render() {
    const countries=["Germany","France","Austria","Spain","Portugal","Greece"]
    const colors=["Rose","White","Red"]
    const regions=["region1","region2","region3"]
    const producers=["producer1","producer2","producer3","producer4",]
    return (
    //  <Container>
     <div>
        {/*CheckboxSidebar renders with a double layered array*/}
        <CheckboxSidebar checkableArrays={[countries,colors,regions,producers]} />
        
     </div>
    //  </Container>
    );
  }
}

export default Wines;
