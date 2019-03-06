import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import { Carousel } from "react-responsive-carousel";


class ScrollingImage extends Component {

  state = {
    image: "",
  }


  render() {
    return (

      <Carousel autoPlay>
        <Grid>
          <Image src="./images/redPouring.jpg" />
        </Grid>
        <Grid>
          <Image src="./images/wineBarrels.jpg" />
        </Grid>
        <Grid>
          <Image src="./images/vineyard.jpg" />
        </Grid>
        <Grid>
          <Image src="./images/wineInGlass.jpg" />
        </Grid>
        <Grid>
          <Image src="./images/winecorks.jpg" />
        </Grid>
      </Carousel>

   

  //       <Carousel showArrows={true} showThumbs={true}>
  //           <div> 
  //             <Grid>
  //               <img src="./images/redPouring.jpg" />
  //             </Grid>
  //             <Grid>
  //               <img src="./images/wineBarrels.jpg" />
  //             </Grid>
  //             <Grid>
  //               <img src="./images/vineyard.jpg" />
  //             </Grid>
  //             <Grid>
  //               <img src="./images/wineInGlass.jpg" />
  //             </Grid>
  //             <Grid>
  //               <Image src="./images/winecorks.jpg" />
  //             </Grid>
  //  */}
  //          </div>
  //         ))
  //     }
  //     </Carousel>

    );
  }
}

export default ScrollingImage;
