import React from "react";


function ProductCard() {
  return <article className="container">
    <div className="row">
      <section className="col-xl-4 col-md-4">
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
      <section className="col-xl-4 col-md-4">
        <div className="card bg-light">
          <div className="card-header">Header</div>
          <img className="card-img-top"
               src="https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_PE686835_S5.JPG"
               alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's
              content.</p>
          </div>
        </div>
      </section>

      <section className="col-xl-4 col-md-4">
        <div className="card text-white bg-success">
          <img className="card-img-top"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9apXI6uxmVoqHidB9kgO69He5m2lbka_uw&usqp=CAU"
               alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's
              content.</p>
          </div>
        </div>
      </section>
      <section className="col-xl-4 col-md-4">
        <div className="card bg-light">
          <img className="card-img-top"
               src="https://images-na.ssl-images-amazon.com/images/I/81OlSk0b37L._AC_SX522_.jpg"
               alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's
              content.</p>
          </div>
        </div>
      </section>
    </div>
  </article>
}

export default ProductCard;