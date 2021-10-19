import React, {useEffect} from "react";
import Slider from "react-slick";

function ProductCarousel(props:any) {
  const carouselData: Array<SlickImage> = props.carouselData;

  const settings = {
    cssEase: 'linear',
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    duration: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  useEffect(() => {
  });

  return <section className="slick-product-carousel-content">
    <Slider {...settings} className="slick-product-carousel">
        {
          carouselData.map((item: SlickImage) => {
            return <div key={'img' + item.id} className="slider-item" style={{"height": "100px"}}>
              <img className="d-block w-100" src={item.url} alt="First slide"/>
            </div>;
          })
        }
    </Slider>
  </section>
}

export default ProductCarousel;