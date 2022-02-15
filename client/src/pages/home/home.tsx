import React from "react";
import YouTube from "react-youtube";
import Carousel from "../../components/carousel";
import ProductCard from "../../components/cards/productCard";
import OffersListContainer from "../../components/offers/offersListContainer";
import StoreButtonBanner from "../../components/buttons/storeButtonBanner";
import SpecialGiftOffer from "../../components/specialGiftOffer";
import VideoBanner from "../../components/videoBanner";
import RecentNewsList from "../../components/recentNewsList";
import InstagramPhotosList from "../../components/instagramPhotosList";


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
    <RecentNewsList/>
    <InstagramPhotosList/>

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

  </article>;
}

export default Home;