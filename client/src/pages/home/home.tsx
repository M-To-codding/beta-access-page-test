import React from "react";
import YouTube from "react-youtube";
import Carousel from "../../components/carousel";
import ProductCard from "../../components/cards/productCard";
import OffersListContainer from "../../components/offers/offersListContainer";
import StoreButtonBanner from "../../components/buttons/storeButtonBanner";
import SpecialGiftOffer from "../../components/specialGiftOffer";
import VideoBanner from "../../components/videoBanner";


interface AppProps {
  productsList: IProduct[],
}

function Home(props: AppProps) {

  if (!props.productsList || props.productsList.length === 0) {
    return <article className="home-content">
      <Carousel/>

      <section className="container -padding-top80 -padding-bottom80">
        <h3 className="text-center">Products list is empty</h3>
      </section>
    </article>
  }

  let productsList: any[] = props.productsList;

  return <article className="home-content">
    <Carousel/>

    <section className="container -padding-top80 -padding-bottom80">
      <div className="row">
        {
          (props.productsList && props.productsList.length > 0) &&
          productsList.map((item: IProduct, index: number) => {
            if (index === 0) {
              return <>
                <ProductCard product={item}/>
                <StoreButtonBanner/>
              </>;
            }
            return <ProductCard product={item}/>;
          })
        }
      </div>

    </section>

    <SpecialGiftOffer/>
    <OffersListContainer/>
    <VideoBanner/>

    {/* Recent news block*/}

    <section className="-padding-top80 -padding-bottom80">
      <div className="container d-flex justify-content-between flex-wrap">

        <h2 className="title w-100 -padding-bottom60">Latest news</h2>

        <article>
          <header className="news-header">
            <img width={300}
                 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/high-angle-view-of-variety-of-succulent-plants-royalty-free-image-1584462052.jpg"
                 alt=""/>
          </header>
          <main>
            <h3>Post title</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </main>
        </article>

        <article>
          <header className="news-header">
            <img width={300}
                 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/high-angle-view-of-variety-of-succulent-plants-royalty-free-image-1584462052.jpg"
                 alt=""/>
          </header>
          <main>
            <h3>Post title</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </main>
        </article>

        <article>
          <header className="news-header">
            <img width={300}
                 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/high-angle-view-of-variety-of-succulent-plants-royalty-free-image-1584462052.jpg"
                 alt=""/>
          </header>
          <main>
            <h3>Post title</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </main>
        </article>

      </div>
    </section>

    {/* /Recent news block*/}

    {/* Instagram block*/}

    <section>
      <a href="#" className="d-flex">
        <article>
          <img width={300}
               src="https://specials-images.forbesimg.com/imageserve/608990c4bcf2c7b4802c9725/Indoor-plants/960x0.jpg?fit=scale"
               alt=""/>
        </article>
        <article>
          <img width={300}
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-V60P4f_c5jNgCpiIRubR2kjveE0rgmJ6A&usqp=CAU"
               alt=""/>
        </article>
        <article>
          <img width={300}
               src="https://www.ugaoo.com/knowledge-center/wp-content/uploads/2016/07/moss-plants-blog-banner-850x525.jpg"
               alt=""/>
        </article>
        <article>
          <img width={300}
               src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1589561181-Monet_SolidCarousel.jpg?crop=0.870xw:0.906xh;0.0353xw,0.0762xh"
               alt=""/>
        </article>
        <article>
          <img width={300}
               src="https://specials-images.forbesimg.com/imageserve/608990c4bcf2c7b4802c9725/Indoor-plants/960x0.jpg?fit=scale"
               alt=""/>
        </article>
      </a>
    </section>

    {/* /Instagram block*/}

    {/* Subscription block*/}

    <section className="bg-light -padding-top60 -padding-bottom60">
      <div className="container">
        <form className="d-flex justify-content-center">
          <label>
            <input className="form-control" type="text" placeholder="Enter your email" name="email"/>
          </label>
          <button className="btn btn-dark" type="button" value="Subscribe">Subscribe</button>
        </form>
      </div>
    </section>

    {/* /Subscription block*/}

  </article>
}

export default Home;