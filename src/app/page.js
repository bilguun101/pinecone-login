'use client'
import "./index.css";
import { useState } from "react";

export default function Home() {

  const [firstState, setFirstState] = useState("");
  const [secondState, setSecondState] = useState("");
  const [thirdState, setThirdState] = useState("");
  const [firstError, setFirstError] = useState(false);
  const [secondError, setSecondError] = useState(false);
  const [thirdError, setThirdError] = useState(false);

  const handleInputValue1 = (event) => {
    setFirstState(event.target.value);
  };
  const handleInputValue2 = (event) => {
    setSecondState(event.target.value);
  };
  const handleInputValue3 = (event) => {
    setThirdState(event.target.value);
  };

  const handleContinueButton = () => {
    if (/\d/.test(firstState) || /[!@#$%^&*(),.?":{}|<>]/.test(firstState)) {
      setFirstError(true);
    }
    else {
      setFirstError(false);
    }

    if (/\d/.test(secondState) || /[!@#$%^&*(),.?":{}|<>]/.test(secondState)) {
      setSecondError(true);
    }
    else {
      setSecondError(false);
    }

    if (thirdState.length < 3) {
      setThirdError(true);
    }
    else {
      setThirdError(false);
    }
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
            onChange={handleInputValue1}
            value={firstState}
            placeholder="Enter first name..." />
          {firstError && <p className="error-text"> First name cannot contain special characters or numbers. </p>}

          <p> Last name <span style={{ color: "red" }}>*</span> </p>
          <input
            onChange={handleInputValue2}
            value={secondState}
            placeholder="Enter last name..." />
          {secondError && <p className="error-text"> Last name cannot contain special characters or numbers. </p>}

          <p> Username <span style={{ color: "red" }}>*</span> </p>
          <input
            onChange={handleInputValue3}
            value={thirdState}
            placeholder="Enter username..." />
          {thirdError && <p className="error-text"> This username is already taken. Please choose another one. </p>}

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

