import React, {useEffect} from "react";
import Slider from "react-slick";
import ProductCard from "./productCard";


function Carousel() {

  const carouselData: Array<SlickImage> = [
    {
      id: '0',
      url: 'https://cdn.shopify.com/s/files/1/0092/8186/3785/files/shutterstock_1026870943_40_adbde2c1-40ac-4473-9597-88fcfe30828b_1600x.jpg?v=1556022704',
      caption: 'The garden'
    },
    {
      id: '1',
      url: 'https://m.media-amazon.com/images/I/81cyA6VfD9L._SL1500_.jpg',
      caption: 'The garden'
    },
    {
      id: '2',
      url: 'https://www.gardeningknowhow.com/wp-content/uploads/2007/03/flowers-1.jpg',
      caption: 'The garden'
    },
  ];

  const settings = {
    cssEase: 'linear',
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    duration: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
  });

  return <section className="slick-content">
    <Slider {...settings}>

        {
          carouselData.map((item) => {
            return <div key={'img' + item.id} className="slider-item">
              <h2 className="caption">The garden</h2>
              <img className="d-block w-100" src={item.url} alt="First slide"/>
            </div>;
          })
        }
    </Slider>

    <ProductCard/>
  </section>
}

export default Carousel;