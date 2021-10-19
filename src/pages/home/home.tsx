import React, {useEffect} from "react";
import Loader from "../../components/loader";
import Carousel from "../../components/carousel";
import ProductCard from "../../components/cards/productCard";


interface AppProps {
  // loading: boolean,
  //   // isAuthorized: boolean,
  //   // error: {},
  //   // checkAuthToken: any,
  //   // logOut: any
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

  return <article className="home-content">
    <Carousel/>

    <section className="container -padding-top80 -padding-bottom80">
      <div className="row">
        {
          (props.productsList && props.productsList.length > 0) &&
          props.productsList.map((item: IProduct) => {
            return <ProductCard product={item}/>;
          })
        }
      </div>
    </section>
  </article>
}

export default Home;