import React, {useEffect, useState} from "react";
import ProductCard from "../../components/cards/productCard";

function Store() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <article className="container -padding-top80">
      <h1 className="title">Welcome to Store!</h1>
      <p className="text-center">Loading...</p>
    </article>
  }

  return <article className="container d-flex justify-content-center -padding-top80">
    <div className="row">
      <ProductCard/>
    </div>
  </article>
}

export default Store;