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
                <h2 className="mb-35">strip configeration </h2>
                
                
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryForm;
