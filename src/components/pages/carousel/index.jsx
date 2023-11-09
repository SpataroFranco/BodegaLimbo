import React from "react";
import { Carousel } from "react-carousel-minimal";
import "./s.css";

function App(props) {

  const {data} = props;
  
  const captionStyle = {
    fontSize: "1em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "0px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div>
        <div>
          <Carousel
            data={data}
            time={5000}
            width="100vw"
            height="80vh"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="60px"
            style={{
              maxWidth: "100vw",
              maxHeight: "100vh"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
