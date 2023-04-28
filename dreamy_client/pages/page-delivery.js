import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DeliveryForm() {
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(null);

  const handleOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    setShowConfirmation(true);
  };

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
                    <h4>Choose your delivery option:</h4>

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
                        <DatePicker id="delivery-date" name="delivery-date" />
                      </div>
                    </div>
                  )}

                  {deliveryOption === "standard" && (
                    <div>
                      <h4>Standard delivery selected</h4>
                      <div>
                        <h4>Choose your delivery date:</h4>
                        <DatePicker
                          id="standard-date"
                          name="standard-date"
                          selected={new Date()}
                          openToDate={new Date()}
                        />
                      </div>
                      {/* display any relevant information or options for standard delivery here */}
                    </div>
                  )}

                  <button type="submit">Submit</button>
                </form>
                {showConfirmation && (
                  <div className="alert alert-success mt-4">
                    <p>Succesfully placed your order!</p>
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
