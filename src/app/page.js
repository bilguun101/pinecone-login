'use client'
import "./index.css";
import { useState } from "react";

const checkIfInputHasSpecialCharacters = (string) => {
  return /[!@#$%^&*(),.?":{}|<>]/.test(string);
}

const checkIfInputHasNumbers = (string) => {
  return /\d/.test(string);
}

export default function Home() {

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  })

  const [errorState, setErrorState] = useState({});

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const validateInput = () => {
    const errors = {}

    if (checkIfInputHasNumbers(formValues.firstName) || checkIfInputHasSpecialCharacters(formValues.firstName)) {
      errors.firstName = 'First name cannot contain special characters or numbers.'
    }
    return errors;
  }

  const handleContinueButton = () => {
    const errors = validateInput()
    console.log(errors);
  }

  return (
    <div className="outer-container-div-that-probably-does-not-matter-that-much">


      <div className="box">
        <img src="/pinecone-logo.png" alt="error" />

        <div className="top-texts">
          <p> Join us! 😎 </p>
          <p> Please provide all current information accurately. </p>
        </div>

        <div className="input-part">
          <p> First name <span style={{ color: "red" }}>*</span> </p>
          <input
            onChange={handleInputChange}
            value={formValues.firstName}
            name="firstName"
            className="input-style"
            placeholder="Enter first name..." />
          {/* {firstError && <p className="error-text"> First name cannot contain special characters or numbers. </p>} */}

          <p> Last name <span style={{ color: "red" }}>*</span> </p>
          <input
            onChange={handleInputChange}
            value={formValues.lastName}
            name="lastName"
            className="input-style"
            placeholder="Enter last name..." />
          {/* {secondError && <p className="error-text"> Last name cannot contain special characters or numbers. </p>} */}

          <p> Username <span style={{ color: "red" }}>*</span> </p>
          <input
            onChange={handleInputChange}
            value={formValues.userName}
            name="userName"
            className="input-style"
            placeholder="Enter username..." />
          {/* {thirdError && <p className="error-text"> This username is already taken. Please choose another one. </p>} */}

        </div>

        <button
          onClick={handleContinueButton}
          className="button">
          Continue
        </button>
      </div>


    </div>
  );
}

