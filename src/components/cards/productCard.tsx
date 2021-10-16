import React from "react";


interface ProductCardProps {
  products: IProduct[]
}

function ProductCard(props: ProductCardProps) {
  return <section className="col-xl-4 col-md-4">
    <div className="card bg-light">
      <img className="card-img-top"
           src="https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1563806745/products/snake-plant-cc1865.jpg"
           alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's
          content.</p>
      </div>
    </div>
  </section>
}

export default ProductCard;