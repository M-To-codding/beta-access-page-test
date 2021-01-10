import React, {useEffect} from "react";
import Loader from "../../components/loader";
import Carousel from "../../components/carousel";
import ProductCard from "../../components/cards/productCard";

function Home() {
  return <article className="home-content">
    <Carousel/>

    <section className="-padding-top80 -padding-bottom80">
      <ProductCard/>
    </section>
  </article>
}

export default Home;