'use client'
import { useState } from "react";
import { FormInput } from "../_components/form-input";


const checkIfInputIsEmail = (string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(string);
}

const checkIfInputIsPhoneNumber = (string) => {
    return /^[0-9]{8}$/.test(string);
}

const checkIfInputHasLetters = (string) => {
    return /[a-zA-Z]/.test(string);
}

const checkIfInputHasNumbers = (string) => {
    return /\d/.test(string);
}



export const StepTwo = (props) => {

    const { handleNextStep, handleBackStep } = props;

    const [formValues, setFormValues] = useState({
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    })

    const [errorState, setErrorState] = useState({});

    const handleInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setFormValues({ ...formValues, [inputName]: inputValue });
    }

    const validateInput = () => {
        const errors = {}

        if (!checkIfInputIsEmail(formValues.email)) {
            errors.email = 'Please provide a valid email address.'
        }
        if (!checkIfInputIsPhoneNumber(formValues.phoneNumber)) {
            errors.phoneNumber = 'Please enter a valid phone number.'
        }
        if (!checkIfInputHasLetters(formValues.password) || !checkIfInputHasNumbers(formValues.password)) {
            errors.password = 'Password must include letters and numbers.'
        }
        if ((formValues.confirmPassword) !== (formValues.password)) {
            errors.confirmPassword = 'Passwords do not match. Please try again.'
        }
        return errors;
    }

    const handleContinueButton = () => {
        const errors = validateInput()
        console.log(errors);
        if (Object.keys(errors).length === 0) {
            setErrorState({});
            handleNextStep();
        }
        else {
            setErrorState(errors);
        }
    }

    const handleBackButton = () => {
        handleBackStep();
    }

    const shouldDisableButton = () => {
        return (
            formValues.email.length === 0 ||
            formValues.phoneNumber.length === 0 ||
            formValues.password.length === 0 ||
            formValues.confirmPassword.length === 0
        );
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
                    <FormInput
                        inputTag={'Email'}
                        handleChange={handleInputChange}
                        name={"email"}
                        value={formValues.email}
                        error={errorState.email}
                        placeholder={"Enter email..."} />
                    <FormInput
                        inputTag={'Phone number'}
                        handleChange={handleInputChange}
                        name={"phoneNumber"}
                        value={formValues.phoneNumber}
                        error={errorState.phoneNumber}
                        placeholder={"Enter phone number..."} />
                    <FormInput
                        inputTag={'Password'}
                        handleChange={handleInputChange}
                        name={"password"}
                        value={formValues.password}
                        error={errorState.password}
                        placeholder={"Enter password..."}
                        type="password" />
                    <FormInput
                        inputTag={'Confirm password'}
                        handleChange={handleInputChange}
                        name={"confirmPassword"}
                        value={formValues.confirmPassword}
                        error={errorState.confirmPassword}
                        placeholder={"Rewrite password..."}
                        type="password" />
                </div>


                <div className="back-continue">
                    <button
                        className="button-1"
                        onClick={handleBackButton} >
                        &lt; Back
                    </button>
                    <button
                        className="button-2"
                        disabled={shouldDisableButton()}
                        onClick={handleContinueButton} >
                        Continue 2/3 &gt;
                    </button>
                </div>

            </div>


        </div>
    );
}

