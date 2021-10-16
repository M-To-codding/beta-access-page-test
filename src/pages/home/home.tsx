import React, {useEffect} from "react";
import Loader from "../../components/loader";
import Carousel from "../../components/carousel";
import ProductCard from "../../components/cards/productCard";

function Home() {
  return <article className="home-content">
    <Carousel/>

    <section className="container -padding-top80 -padding-bottom80">
      <div className="row">
        <ProductCard products={[]}/>
      </div>
    </section>
  </article>
}

export default Home;