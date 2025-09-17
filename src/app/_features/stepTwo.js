'use client'
import { useState } from "react";
import { FormInput } from "../_components/info-input";

const checkIfInputHasSpecialCharacters = (string) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(string);
}

const checkIfInputHasNumbers = (string) => {
    return /\d/.test(string);
}

export const StepTwo = (props) => {

    const { handleNextStep } = props;

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
        if (checkIfInputHasNumbers(formValues.lastName) || checkIfInputHasSpecialCharacters(formValues.lastName)) {
            errors.lastName = 'Last name cannot contain special characters or numbers.'
        }
        if (checkIfInputHasNumbers(formValues.userName) || checkIfInputHasSpecialCharacters(formValues.userName)) {
            errors.userName = 'Username cannot contain special characters or numbers.'
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

    const shouldDisableButton = () => {
        return (
            formValues.firstName.length === 0 ||
            formValues.lastName.length === 0 ||
            formValues.userName.length === 0
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
                        inputTag={'First Name'}
                        handleChange={handleInputChange}
                        name={"firstName"}
                        value={formValues.firstName}
                        error={errorState.firstName} />
                    <FormInput
                        inputTag={'Last Name'}
                        handleChange={handleInputChange}
                        name={"lastName"}
                        value={formValues.lastName}
                        error={errorState.lastName} />
                    <FormInput
                        inputTag={'User Name'}
                        handleChange={handleInputChange}
                        name={"userName"}
                        value={formValues.userName}
                        error={errorState.userName} />
                </div>

                <button
                    disabled={shouldDisableButton()}
                    onClick={handleContinueButton}
                    className="button">
                    Continue 1/3 &gt;
                </button>
            </div>


        </div>
    );
}

