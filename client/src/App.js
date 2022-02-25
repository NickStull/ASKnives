import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title={"NEW RELEASES"}
        category={"new_releases"}
        type={"knives"}
        isLargeRow
      />

      <div style={{position: "relative", height: "50vh", width: "100%"}}>
        <Carousel 
          arrows
          centerMode
          additionalTransfrom={0}
          containerClass="carousel-container"
          itemClass="item-container"
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}

        >
          <img style={{ overflow: 'hidden', margin: '0 20px', maxHeight: '100%'}} src='./bannerimg.jpeg' />
          <img style={{ overflow: 'hidden', margin: '0 20px', maxHeight: '100%'}} src='./askniveslogo.jpeg' />
          <img style={{ overflow: 'hidden', margin: '0 20px', maxHeight: '100%'}} src='./bannerimg.jpeg' />
          <img style={{ overflow: 'hidden', margin: '0 20px', maxHeight: '100%'}} src='./logo512.png' />
        </Carousel>
      </div>

      <div style={{height: "800px"}}></div>
    </div>
  );
}

export default App;