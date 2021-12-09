import React from "react";
import ProductCarousel from "../productCarousel";


function OffersList() {

  const offersData:any = [
    {
      id: '0',
      url: 'https://sgi2.offerscdn.net/i/production/published/65/filename/14983.flim.v63.bffffff.jpg',
      caption: 'Stuff offers'
    },
    {
      id: '1',
      url: 'https://i.pinimg.com/originals/df/43/74/df43748883cf66a686c48ede3508be10.jpg',
      caption: 'Plants offers'
    }
  ]

  return <article className="flex-column justify-content-center offers-content -padding-bottom80">
    <section className="d-flex flex-row offers-list">
      {/*<ProductCarousel carouselData={slickData} carouselClassName="offers-carousel-content" slidesToShow={2} autoplay={false} caption={true}/>*/}
      <div className="offers-content">
        {
          offersData.map((item: any) => {
            return <div key={item.id} className="offers-item">
              <div className="offers-item-img">
                <img src={item.url} alt=""/>
              </div>

              <a href="#" className="caption-link">
                <h4 className="caption">{item.caption}</h4>
              </a>
            </div>
          })
        }
      </div>
    </section>

    <a href="#" className="link-wrapper">
      <section className="flex-row justify-content-between link-to-offers">
        <div className="img-small-circle">
          <img
            src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/30402E408CEC494B8197AFC3E8ECAFAB/28529_32606328.jpg?fit=inside|1024:1024"
            alt=""/>
          <div className="top-img-box-shadow"></div>
        </div>

        <p className="offers-link-text">
          Lorem ipsum dolor sit amet
        </p>

        <div className="img-small-circle">
          <img width="auto"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLf9FbqfyHSq-TQNZoiP3BwpBsMvgl-cWFKpFRYOO2opd_-nTt23aZfNWjbGwh2zrlvmI&usqp=CAU"
               alt=""/>
          <div className="top-img-box-shadow"></div>
        </div>
      </section>
    </a>
  </article>
}

export default OffersList;