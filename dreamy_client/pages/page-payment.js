import Layout from "../components/layout/Layout";
import { useState } from "react";
import PageCreditCard from "./page-creditcard"

function payment() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("Selected payment method:", paymentMethod);
    if (paymentMethod === 'credit-card') {
      // redirect to credit card page
      window.location.href = '/creditcard';
    } 
  };

  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="payment">
        <div className="page-content pt-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="row align-items-end mb-50">
                  <div className="col-lg-15 mb-lg-0 mb-md-5 mb-sm-1 text-justify-center">
                    <h4 className="mb-4">Choose your payment method</h4>
                    <form onSubmit={handleFormSubmit}>
                      <div >
                      <div>
                      <input
                        type="radio"
                        id="credit-card"
                        name="payment-method"
                        value="credit-card"
                        checked={paymentMethod === "credit-card"}
                        onChange={handlePaymentMethodChange}
                      />
                      <label htmlFor="pickup">Credit Card</label>
                    </div>
                      </div>
                      {/* {paymentMethod === "credit-card" && (
                        <>
                          <div >
                            <label htmlFor="card-type">Card Type</label>
                            <select id="card-type" className="form-control">
                              <option value="visa">Visa</option>
                              <option value="mastercard">Mastercard</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="card-number">Card Number</label>
                            <input
                              type="text"
                              id="card-number"
                              className="form-control"
                            />
                          </div>
                          <div className="form-row">
                            <div className="col-md-6">
                              <div className="form-group ">
                                <label htmlFor="expiration-date">
                                  Expiration Date (MM/YY)
                                </label>
                                <input
                                  type="text"
                                  id="expiration-date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="cvv">Security Code (CVV)</label>
                                <input
                                  type="text"
                                  id="cvv"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )} */}
                      <div className="form-group">

                      <div>
                      <input
                        type="radio"
                        id="cash"
                        name="payment-method"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={handlePaymentMethodChange}
                      />
                      <label htmlFor="pickup">Cash on</label>
                    </div>
                        
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Check Out
                      </button>
                      <PageCreditCard/> 
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}




export default payment;
