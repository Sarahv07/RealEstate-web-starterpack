import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide from "./Slide";
import { slideData,responsive } from "./data";


const Slider = ()=>{
  

  const slide = slideData.map((item) => (
    <Slide
      name={item.name}
      url={item.imageurl}
      description={item.description}
      link={item.link}
    />
  ));

  return (
    <div>
      <Carousel
        responsive={responsive}
        className="carousel"
        infinite ={true}
      >
        {slide}
      </Carousel>
    </div>
  );
}

export default Slider;