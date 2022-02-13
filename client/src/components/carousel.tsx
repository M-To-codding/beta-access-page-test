import React, {useEffect} from "react";
import Slider from "react-slick";


function Carousel() {

  const carouselData: Array<SlickImage> = [
    {
      id: '0',
      url: 'https://images.pexels.com/photos/4058155/pexels-photo-4058155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      caption: 'Lots of Succulents and Plants'
    },
    {
      id: '1',
      url: 'https://images.pexels.com/photos/1903977/pexels-photo-1903977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      caption: ' Find the Perfect Plant'
    },
    {
      id: '2',
      url: 'https://st3.depositphotos.com/11887942/14577/i/1600/depositphotos_145776925-stock-photo-gardening-tools-flowers-pots-white.jpg',
      caption: 'New Arrivals'
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
              <h2 className="caption">{item.caption}</h2>
              <img className="d-block w-100" src={item.url} alt="First slide"/>
            </div>;
          })
        }
    </Slider>
  </section>
}

export default Carousel;