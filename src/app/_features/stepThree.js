'use client'
import { useState } from "react";


export const StepThree = (props) => {
    const { handleNextStep, handleBackStep } = props;

    const [formValues, setFormValues] = useState({
        date: "",
    });

    const [profileFile, setProfileFile] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [errorState, setErrorState] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const validateInput = () => {
        const errors = {};


        if (!formValues.date) {
            errors.date = "Please select a date.";
        } else {
            const birthDate = new Date(formValues.date);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            const d = today.getDate() - birthDate.getDate();
            if (m < 0 || m === 0 && d < 0) {
                age--;
            }

            if (age < 18) {
                errors.date = "You must be at least 18 years old.";
            }
        }
        if (!profileFile) {
            errors.file = "Please enter profile picture.";
        }
        else if (!profileFile.type.startsWith("image/")) {
            errors.file = "Only images are allowed.";
        }

        return errors;
    };

    const handleContinueButton = () => {
        const errors = validateInput();
        if (Object.keys(errors).length === 0) {
            setErrorState({});
            handleNextStep();
        } else {
            setErrorState(errors);
        }
    };

    const handleImgUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileFile(file);
            setImgUrl(URL.createObjectURL(file));
            setErrorState((prev) => ({ ...prev, file: undefined }));
        }
    };

    const handleBackButton = () => {
        handleBackStep();
    };


    return (
        <div className="outer-container-div-that-probably-does-not-matter-that-much">
            <div className="box">
                <img src="/pinecone-logo.png" alt="logo" />

                <div className="top-texts">
                    <p> Join us! 😎 </p>
                    <p> Please provide all current information accurately. </p>
                </div>

                <div className="input-part2">
                    <p> Date of birth <span style={{ color: "red" }}>*</span> </p>
                    <input
                        type="date"
                        name="date"
                        value={formValues.date}
                        onChange={handleInputChange}
                        className={`date-input${errorState.date ? " error" : ""}`} />

                    {errorState.date && <p className="error-1"> {errorState.date} </p>}

                    <p style={{ marginTop: "12px" }}> Profile image <span style={{ color: "red" }}>*</span> </p>
                    <label
                        htmlFor="id-upload"
                        className="upload"
                        style={
                            imgUrl
                                ? { border: "none" }
                                : { border: "2px dashed grey" }
                        }>
                        {imgUrl ? (
                            <img className="image" src={imgUrl} alt="" />
                        ) : (
                            <>
                                <span>
                                    <img className="vector" src="vector.png" alt="" />
                                </span>
                                <p> Add image </p>
                            </>
                        )}
                    </label>

                    {errorState.file && <p className="error-1"> {errorState.file} </p>}

                    <input
                        id="id-upload"
                        accept="image/*"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleImgUpload}
                    />
                </div>

                <div className="back-continue">
                    <button
                        className="button-1"
                        onClick={handleBackButton} >
                        &lt; Back
                    </button>
                    <button
                        className="button-2"
                        onClick={handleContinueButton} >
                        Continue 3/3 &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};
