import React from "react";
import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

{/* <Carousel showArrows={true} showThumbs={true}>
{
    images.map((url, index) => (
       <Image key={index} src={url} />
    ))
}
</Carousel> */}

const App = () => (
  <div>
    <Carousel />
  </div>
);

render(<App />, document.getElementById("root"));