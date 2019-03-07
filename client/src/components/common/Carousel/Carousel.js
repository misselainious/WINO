import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import { Carousel } from "react-responsive-carousel";


class imageScrolling extends Component {

  state = {
    image: "",
  }


  render() {
    return (

      // <Carousel autoPlay>
      //   <Grid>
      //     <Image src="./images/redPouring.jpg" />
      //   </Grid>
      //   <Grid>
      //     <Image src="./images/wineBarrels.jpg" />
      //   </Grid>
      //   <Grid>
      //     <Image src="./images/vineyard.jpg" />
      //   </Grid>
      //   <Grid>
      //     <Image src="./images/wineInGlass.jpg" />
      //   </Grid>
      //   <Grid>
      //     <Image src="./images/winecorks.jpg" />
      //   </Grid>
      // </Carousel>

   

        <Carousel showArrows={true} showThumbs={true}>
  
              <Grid>
                <img src="./images/redPouring.jpg" alt="redPouring" />
              </Grid>
              <Grid>
                <img src="./images/wineBarrels.jpg" alt="wineBarrels" />
              </Grid>
              <Grid>
                <img src="./images/vineyard.jpg" alt="vineyard" />
              </Grid>
              <Grid>
                <img src="./images/wineInGlass.jpg" alt="wineInGlass" />
              </Grid>
              <Grid>
                <Image src="./images/winecorks.jpg" alt="winecorks" />
              </Grid>
           
          ))
      }
      </Carousel>
    );
  }
}

export default imageScrolling;
