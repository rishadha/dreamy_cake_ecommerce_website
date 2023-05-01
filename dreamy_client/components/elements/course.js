
import React, { useState, useEffect } from "react";
import axios from "axios";


function Course() {
    const [firstname, setFirstName] = useState("");

    const [lastname, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");

    const [phonenumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");

    const [course, setCertificate] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const [successMessage, setSuccessMessage] = useState(null);
    const handleFirstNameChange = (event) => {
        const firstNameValue = event.target.value;
        // Check that the first name contains only letters
        const regex = /^[A-Za-z]+$/;
        if (regex.test(firstNameValue)) {
            setFirstName(firstNameValue);
        }
    };

    const handleLastNameChange = (event) => {
        const lastNameValue = event.target.value;
        // Check that the last name contains only letters
        const regex = /^[A-Za-z]+$/;
        if (regex.test(lastNameValue)) {
            setLastName(lastNameValue);
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAddressChange = (event) => {
        const addressValue = event.target.value;
        setAddress(addressValue);

        if (!addressValue) {
            setAddressError("Please enter your address.");
        } else {
            setAddressError("");
        }
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };


    const handleCertificateChange = (event) => {
        setCertificate(event.target.value);
    };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your form submission logic
        console.log('firstname', firstname)
        console.log('lastname', lastname)
        console.log('email', email)
        console.log('address', address)
        console.log('phonenumber',phonenumber)
        console.log('course',course)

        if(firstname, lastname, email, address, phonenumber, course){
            console.log('Data succesfully post from the Front-end')
            axios.post('http://localhost:4000/api/courseData', {
                firstname,
                lastname,
                email,
                address,
                phonenumber,
                course
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
        } else{
            alert('Please all the feild')
        }

    
        //setSuccessMessage('Registration successful!');
        // alert('Registration successful!');
    };

    const validatePhoneNumber = (number) => {
        const regex = /^\d{10}$/; // 10-digit phone number pattern
        return regex.test(number);
    };
    useEffect(() => {
        if (phonenumber && !validatePhoneNumber(phonenumber)) {
            setPhoneNumberError("Please enter a valid 10-digit phone number.");
        } else {
            setPhoneNumberError("");
        }
    }, [phonenumber]);

    const validateEmail = (email) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
    useEffect(() => {
        if (email && !validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    }, [email]);



    return (
        <>
            <div className="comment-form">
                <h3 className="mb-15">Register Now</h3>
                <div className="product-rate d-inline-block mb-30"></div>
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        <form
                            className="form-contact comment_form mb-50"
                            action="#"
                            id="commentForm"
                            onSubmit={handleSubmit}
                        >
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name=" First Name"
                                            id="first name"
                                            type="text"
                                            placeholder="First Name"
                                            value={firstname}
                                            onChange={handleFirstNameChange}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your first name.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name=" Last Name"
                                            id="last name"
                                            type="text"
                                            placeholder="Last Name"
                                            value={lastname}
                                            onChange={handleLastNameChange}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your last name.
                                        </div>
                                        {lastNameError && (
                                            <div className="invalid-feedback">{lastNameError}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            className={`form-control ${emailError ? "is-invalid" : ""}`}
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                        />
                                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            className={`form-control ${addressError ? "is-invalid" : ""}`}
                                            name="Address"
                                            id="address"
                                            type="text"
                                            placeholder="Address"
                                            value={address}
                                            onChange={handleAddressChange}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your address.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            className={`form-control ${phoneNumberError ? "is-invalid" : ""}`}
                                            name="Phone Number"
                                            id="phonenumber"
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={phonenumber}
                                            onChange={handlePhoneNumberChange}
                                            required
                                        />
                                        {phoneNumberError && (
                                            <div className="invalid-feedback">{phoneNumberError}</div>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <select
                                                className="form-control"
                                                name="certificate"
                                                id="certificate"
                                                value={course}
                                                onChange={handleCertificateChange}
                                            >
                                                <option value="Certificate Course">Certificate Course</option>
                                                <option value="Diploma Course">Diploma Course</option>
                                                <option value="Advance Diploma Course">Advance Diploma Course</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="button button-contactForm"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        {successMessage && (
                            <div className="alert alert-success">{successMessage}</div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}
export default Course;
