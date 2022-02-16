import React from "react";

function SpecialGiftOffer() {
  return <section className="gift-offering -padding-top80 -padding-bottom80">

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

  </section>;
}

export default SpecialGiftOffer;