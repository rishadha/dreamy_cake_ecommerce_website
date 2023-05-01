// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Link } from "react-router-dom";

// function DeliveryForm() {
//   const [deliveryOption, setDeliveryOption] = useState("standard");
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);
//   const [deliveryDate, setDeliveryDate] = useState(null);

//   const handleOptionChange = (e) => {
//     setDeliveryOption(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // handle form submission logic here
//     setShowConfirmation(true);
//     setShowDeliveryInfo(true);
//   };
//   function DeliveryInfo({ onClose }) {
//     return (
//       <div className="tab-pane fade active show">
//         <div className="card">
//           <div className="card-header">
//             <h5>Delivery Information</h5>
//           </div>
//           <div className="card-body">
//             <form method="post" name="enq">
//               <div className="row">
//                 <div className="form-group col-md-6">
//                   <label>
//                     Name <span className="required">*</span>
//                   </label>
//                   <input
//                     required=""
//                     className="form-control"
//                     name="name"
//                     type="text"
//                   />
//                 </div>
//                 <div className="form-group col-md-6">
//                   <label>
//                     Address <span className="required">*</span>
//                   </label>
//                   <input
//                     required=""
//                     className="form-control"
//                     name="address"
//                     type="text"
//                   />
//                 </div>
//                 <div className="form-group col-md-6">
//                   <label>
//                     District <span className="required">*</span>
//                   </label>
//                   <input
//                     required=""
//                     className="form-control"
//                     name="district"
//                     type="text"
//                   />
//                 </div>
//                 <div className="form-group col-md-6">
//                   <label>
//                     Postal Code <span className="required">*</span>
//                   </label>
//                   <input
//                     required=""
//                     className="form-control"
//                     name="postal-code"
//                     type="text"
//                   />
//                 </div>
//                 <div className="form-group col-md-6">
//                   <label>
//                     Phone Number <span className="required">*</span>
//                   </label>
//                   <input
//                     required=""
//                     className="form-control"
//                     name="phone-number"
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-12">
//                 <button
//                   type="submit"
//                   className="btn btn-fill-out submit font-weight-bold"
//                   name="submit"
//                   value="Submit"
//                 >
//                   Pay Now
//                 </button>
//               </div>

//               {/* ... rest of the provided form fields ... */}
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="page-content pt-50">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-10 col-lg-12 m-auto">
//             <section className="row align-items-end mb-50">
//               <div className="col-lg-15 mb-lg-0 mb-md-5 mb-sm-1">
//                 <h2 className="mb-35">Choose your Delivery Option</h2>
//                 <form onSubmit={handleFormSubmit}>
//                   <div>
//                     <h4>Choose your delivery option:</h4>

//                     <div>
//                       <input
//                         type="radio"
//                         id="pickup"
//                         name="delivery-option"
//                         value="pickup"
//                         checked={deliveryOption === "pickup"}
//                         onChange={handleOptionChange}
//                       />
//                       <label htmlFor="pickup">Pickup</label>
//                     </div>
//                     <div>
//                       <input
//                         type="radio"
//                         id="standard"
//                         name="delivery-option"
//                         value="standard"
//                         checked={deliveryOption === "standard"}
//                         onChange={handleOptionChange}
//                       />
//                       <label htmlFor="standard">Standard delivery</label>
//                     </div>
//                   </div>

//                   {deliveryOption === "delivery" && (
//                     <div>
//                       <div>
//                         <h4>Choose your delivery date:</h4>
//                         <DatePicker
//                           id="delivery-date"
//                           name="delivery-date"
//                           inline
//                           minDate={new Date()}
//                         />
//                       </div>
//                     </div>
//                   )}
//                   <div className="alert alert-success mt-4">
//                     <p>Standard delivery selected.Choose your delivery date:</p>
//                   </div>
//                   {deliveryOption === "standard" && (
//                     <div>
//                       <div>
//                         <DatePicker
//                           id="standard-date"
//                           name="standard-date"
//                           selected={new Date()}
//                           openToDate={new Date()}
//                           inline
//                           minDate={new Date()}
//                         />
//                       </div>
//                       {/* display any relevant information or options for standard delivery here */}
//                     </div>
//                   )}

//                   <button type="submit">Submit</button>
//                 </form>
//                 {showConfirmation && (
//                   <div
//                     className="modal-overlay"
//                     onClick={() => setShowDeliveryInfo(false)}
//                   >
//                     <div
//                       className="modal-content"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <div
//                         className="modal-close"
//                         onClick={() => setShowDeliveryInfo(false)}
//                       >
//                         &times;
//                       </div>
//                       <DeliveryInfo />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeliveryForm;
