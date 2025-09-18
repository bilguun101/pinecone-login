'use client'
import { useState } from "react";
import { StepOne } from "./_features/stepOne";
import { StepTwo } from "./_features/stepTwo";
import { StepThree } from "./_features/stepThree";
import "./index.css";



export default function Home() {

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  }

  const handleBackStep = () => {
    if (step === 1) {
      return;
    }
    else {
      setStep(step - 1);
    }
  }

  return (
    <>
      {step === 1 && <StepOne handleNextStep={handleNextStep} />}
      {step === 2 && <StepTwo handleNextStep={handleNextStep} />}
      {step === 3 && <StepThree />}
    </>
  );
}

