import React from "react";
// @ts-ignore
import "../../assets/styles/components/custom-buttons/storeBtnBanner.scss";


function StoreButtonBanner() {

  return <section
    className="col-xl-4 col-md-4 d-flex flex-column align-items-center justify-content-center store-btn-banner">
    <div className="product-card">
      <header className="product-card-title text-center">
        <h2>Our Products</h2>
      </header>
      <div className="card-body text-center">
        <div className="product-banner">
          <div className=" banner-img ">
            <img
              className="banner-img-obj"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmafIbmNG9qV39DoY1cAlhHJ1HQVhKYpsWiLvtpcvGkx9XNT-2RtVzRczHTkHpun3PnwM&usqp=CAU"
              alt=""/>
          </div>
          <p className="card-body-text">Lorem ipsum dolor sit amet asd qwerty</p>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-success go-to-product-btn">
          Go to store
        </button>
      </div>
    </div>
  </section>;
}

export default StoreButtonBanner;