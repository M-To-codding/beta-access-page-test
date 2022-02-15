import React from "react";
import YouTube from "react-youtube";
import Carousel from "../../components/carousel";
import ProductCard from "../../components/cards/productCard";
import OffersListContainer from "../../components/offers/offersListContainer";
import StoreButtonBanner from "../../components/buttons/storeButtonBanner";


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

  const options: any = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

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


    {/* Special gift block*/}

    <section className="gift-offering -padding-top80 -padding-bottom80">

      <div className="decoration-img -top"></div>

      <div className="container gift-offering-content">
        <h2 className="title -padding-bottom60"><span className="-green-text">Special</span>Gift</h2>
        <p className="gift-offering-description">
          Lorem ipsum dolor safe <strong>25%</strong> amet, pede ultrices <strong>1500s</strong> ultrices aspernatur
          facilisis
          vestil ut suspendisse morbi fringilla
        </p>

        <article className="counters-group d-flex justify-content-center align-items-center">

          <section className="counter">
            <p className="counter-amount -font-size-40">
              2
            </p>
            <p className="counter-title">
              Days
            </p>
          </section>
          <p className="-font-size-40">:</p>
          <section className="counter">
            <p className="counter-amount -font-size-40">
              10
            </p>
            <p className="counter-title">
              Hours
            </p>
          </section>
          <p className="-font-size-40">:</p>
          <section className="counter">
            <p className="counter-amount -font-size-40">
              5
            </p>
            <p className="counter-title">
              Minutes
            </p>
          </section>
          <p className="-font-size-40">:</p>
          <section className="counter">
            <p className="counter-amount -font-size-40">
              30
            </p>
            <p className="counter-title">
              Seconds
            </p>
          </section>

        </article>

        <button className="btn btn-outline-success">
          Purchase now
        </button>
      </div>

      <div className="decoration-img -bottom"></div>

    </section>

    {/* /Special gift block*/}


    <OffersListContainer/>

    {/* Video block*/}

    <section>
      <YouTube videoId="D0I1LbX4YD0" opts={options}/>
    </section>

    {/* /Video block*/}


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
        <form  className="d-flex justify-content-center">
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