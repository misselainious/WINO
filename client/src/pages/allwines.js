import React, { Component } from "react";
// import Container from "../components/Container";
import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";

class Wines extends Component {
  state = {
    wines: [],
    code: "",
    producer: "",
    notes: ""
  };

  componentDidMount() {
    this.loadWines();
  }


loadWines = () => {
  API.getWines()
    .then(res => {
      console.log("WInes: ", res)
      this.setState({ books: res.data, code: "", producer: "", notes: "" })
    }
    )
    .catch(err => console.log(err));
};

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
        

        {/* {this.state.wines.length ? (
              <List>
                {this.state.wines.map(wine => (
                  <ListItem key={wine._id}>
                    <Link to={"/wines/" + wine._id}>
                      <strong>
                        {wine.code} by {wine.producer}
                        and also {wine.notes}
                      </strong>
                    </Link>
                  
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}


     </div>
    //  </Container>
    );
  }
}

export default Wines;
