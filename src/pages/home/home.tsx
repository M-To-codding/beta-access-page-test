import React from "react";
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

// TODO: refactoring -> replace layout into component
function buildProductsStoreBtn() {
  let block = <section
    className="col-xl-4 col-md-4 d-flex flex-column align-items-center justify-content-center go-to-store-banner">
    <div className="product-card">
      <header className="product-card-title text-center">
        <h2>Our Products</h2>
      </header>
      <div className="card-body text-center">
        <div className="product-banner">
          <div className=" banner-img ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmafIbmNG9qV39DoY1cAlhHJ1HQVhKYpsWiLvtpcvGkx9XNT-2RtVzRczHTkHpun3PnwM&usqp=CAU"
              alt=""/>
          </div>
          <p>Lorem ipsum dolor sit amet asd qwerty</p>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-success go-to-product-btn">
          Go to store
        </button>
      </div>
    </div>
  </section>;

  return block;
}

function buildProductsList(props: AppProps) {
  let productsList: any[] = [];
  props.productsList.forEach((item, index) => {
    if (index === 1) {
      productsList.push(buildProductsStoreBtn());
      productsList.push(item);
    } else {
      productsList.push(item);
    }
  })

  return productsList;
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

  let productsList: any[] = buildProductsList(props);

  return <article className="home-content">
    <Carousel/>

    <section className="container -padding-top80 -padding-bottom80">
      <div className="row">
        {
          (props.productsList && props.productsList.length > 0) &&
          productsList.map((item: IProduct, index: number) => {
            if (index === 1) {
              return item;
            }
            return <ProductCard product={item}/>;
          })
        }
      </div>
    </section>
  </article>
}

export default Home;