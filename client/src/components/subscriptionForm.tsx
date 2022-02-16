import React from 'react';

function SubscriptionForm() {
  return <section className="bg-light -padding-top60 -padding-bottom60">
    <div className="container">
      <form className="d-flex justify-content-center">
        <label>
          <input className="form-control" type="text" placeholder="Enter your email" name="email"/>
        </label>
        <button className="btn btn-dark" type="button" value="Subscribe">Subscribe</button>
      </form>
    </div>
  </section>
}

export default SubscriptionForm;