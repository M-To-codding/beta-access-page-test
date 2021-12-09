import React, {useEffect} from "react";
import Slider from "react-slick";

interface ProductCarouselProps {
  carouselData: Array<SlickImage>,
  carouselClassName?: string,
  slidesToShow?: number,
  autoplay?: boolean,
  caption?: boolean
}

function ProductCarousel(props: ProductCarouselProps) {
  const {carouselData, carouselClassName = '', slidesToShow = 1, autoplay = true, caption = false}: ProductCarouselProps = props;

  const settings = {
    cssEase: 'linear',
    dots: true,
    infinite: true,
    autoplay: autoplay,
    speed: 1000,
    duration: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false
  };


  return <section className={`slick-product-carousel-content ${carouselClassName}`}>
    <Slider {...settings} className="slick-product-carousel">
      {
        carouselData.map((item: SlickImage) => {
          return <div key={'img' + item.id} className="slider-item" style={{"height": "100px"}}>
            {
              caption &&
              <a href="#" className="caption-link">
                <h4 className="caption">{item.caption}</h4>
              </a>
            }
            <img className="d-block w-100" src={item.url} alt="First slide"/>
          </div>;
        })
      }
    </Slider>
  </section>
}

export default ProductCarousel;