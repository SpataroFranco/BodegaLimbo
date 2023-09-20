import { Carousel } from "react-carousel-minimal";
import "./s.css";

function App() {
  const data = [
    {
      image: "/carousel/images.jpeg",
      caption: "none",
    },
    {
      image: "/carousel/campo.jpeg",
      caption: "campo",
    },

    {
      image:
        "/carousel/cartelLIMBO.jpeg",
      caption: "cartel limbo",
    },
    {
      image:
        "/carousel/images.jpg",
      caption: "none",
    },
    {
      image:
        "/carousel/invierno.jpg",
      caption: "invierno",
    },
    {
      image:
        "/carousel/uvadesdeadentro.jpg",
      caption: "uvas desde adentro",
    },
    {
      image:
      "/carousel/nieve.jpeg",
      caption: "nieve",
    },
    {
      image:
      "/carousel/vinedo-y-bodega1.jpeg",
      caption: "cultivo",
    },
    {
      image:"/carousel/fondo-finca.png",
      caption: "finca"
    },
    {
      image:"/carousel/mano.jpg",
      caption: "mano"
    }
  ];

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
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            thumbnails={true}
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
