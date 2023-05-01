import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function DeliveryForm() {
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handleOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    if (deliveryOption === "standard") {
      setShowConfirmation(true);
      setShowDeliveryInfo(true);
    } else {
      // redirect to payment page
      window.location.href = "/page-payment";
    }
  };

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    // handle form submission logic here
    setShowConfirmation(true);
    setShowDeliveryInfo(true);
  };

  function DeliveryInfo({ onClose}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Save the information to the database here
      alert("Successfully updated information!");
      window.location.href =
        "/shop-cart";



    };
    return (
      <div className="delivery-info">
        <div className="row">
          <h5>Delivery Information</h5>
        </div>
        <div className="card-body">
          <form method="post" name="enq">
            <div className="row">
              <div className="form-group col-md-6">
                <label>
                  Name <span className="required">*</span>
                </label>
                <input
                  required=""
                  className="form-control"
                  name="name"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label>
                  Address <span className="required">*</span>
                </label>
                <input
                  required=""
                  className="form-control"
                  name="address"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label>
                  District <span className="required">*</span>
                </label>
                <input
                  required=""
                  className="form-control"
                  name="district"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label>
                  Postal Code <span className="required">*</span>
                </label>
                <input
                  required=""
                  className="form-control"
                  name="postal-code"
                  type="text"
                />
              </div>
              <div className="form-group col-md-12">
                <label>
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  required=""
                  className="form-control"
                  name="phone-number"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-12"></div>

            {/* ... rest of the provided form fields ... */}
          </form>

          {/* ... existing form inputs ... */}
        </div>
        <div className="row">
          <button
            type="submit"
            className="btn btn-fill-out submit font-weight-bold"
            name="submit"
            value="Submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div
        className="modal-close"
        onClick={onClose}
      >
        &times;
      </div>
      </div>
    );
  }

  return (
    <div className="page-content pt-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            <section className="row align-items-end mb-50">
              <div className="col-lg-15 mb-lg-0 mb-md-5 mb-sm-1">
                <h2 className="mb-35">Choose your Delivery Option</h2>
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="pickup"
                        name="delivery-option"
                        value="pickup"
                        checked={deliveryOption === "pickup"}
                        onChange={handleOptionChange}
                      />
                      <label htmlFor="pickup">Pickup</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="standard"
                        name="delivery-option"
                        value="standard"
                        checked={deliveryOption === "standard"}
                        onChange={handleOptionChange}
                      />
                      <label htmlFor="standard">Standard delivery</label>
                    </div>
                  </div>

                  {deliveryOption === "delivery" && (
                    <div>
                      <div>
                        <h4>Choose your delivery date:</h4>
                        <DatePicker
                          id="delivery-date"
                          name="delivery-date"
                          inline
                          minDate={new Date()}
                        />
                      </div>
                    </div>
                  )}

                  {deliveryOption === "standard" && (
                    <div>
                      <div>
                        <DatePicker
                          id="standard-date"
                          name="standard-date"
                          selected={new Date()}
                          openToDate={new Date()}
                          inline
                          minDate={new Date()}
                        />
                      </div>
                      {/* display any relevant information or options for standard delivery here */}
                    </div>
                  )}
                  {deliveryOption === "pickup" && (
                    <button
                      className="btn btn-fill-out submit font-weight-bold"
                      onClick={() => {
                        window.location.href =
                          "/page-payment";
                      }}
                    >
                      Continue
                    </button>
                  )}

                  {deliveryOption === "standard" && (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <button
                        className="btn btn-fill-out submit font-weight-bold"
                        style={{ marginRight: "10px" }}
                        onClick={() => {
                          setShowConfirmation(true);
                          setShowDeliveryInfo(true);
                        }}
                      >
                        Update Info
                      </button>
                      <button
                        className="btn btn-fill-out submit font-weight-bold"
                        onClick={() => {
                          window.location.href =
                            "/page-payment";
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </form>

                {showConfirmation && (
                  <div
                    className="modal-overlay"
                    onClick={() => setShowDeliveryInfo(false)}
                  >
                    <div
                      className="modal-content"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className="modal-close"
                        onClick={() => setShowDeliveryInfo(false)}
                      >
                        &times;
                      </div>
                      <DeliveryInfo onClose={() => setShowDeliveryInfo(false)} />
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryForm;
