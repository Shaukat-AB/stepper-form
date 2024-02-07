import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepFinal } from "./StepFinal";

export const MultiStepForm = ({ stepState }) => {
    const [details, setDetails] = useState({});
    const [currentStep, setCurrentStep] = stepState;
    const stepOne = currentStep === 1;
    const stepTwo = currentStep === 2;
    const final = currentStep > 2;

    const onSubmit = (e) => {
        e.preventDefault();
        displayToConsole();
        if (currentStep !== 3) {
            setCurrentStep(() => 3);
        } else setCurrentStep(() => 1);
        setDetails(() => {});
    };

    const displayToConsole = () => {
        details &&
            Object.keys(details).forEach((e) => {
                console.log("Your details are...");
                console.log(e, " = ", details[e]);
            });
    };

    const onBudgetChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const newDetails = { ...details, [name]: value };
        setDetails(() => newDetails);
        setCurrentStep(() => 2);
    };

    const onDetailChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const newDetails = { ...details, [name]: value };
        setDetails(() => newDetails);
    };

    return (
        <section className="text-center min-h-screen">
            <form
                className={(final && "translate-y-1/3") || ""}
                onSubmit={(e) => onSubmit(e)}
            >
                {!final && (
                    <h2 className="text-2xl font-bold mb-3">
                        Step # {currentStep || 1}
                    </h2>
                )}
                {stepOne && <StepOne onBudgetChange={onBudgetChange} />}
                {stepTwo && <StepTwo onDetailChange={onDetailChange} />}
                {final && <StepFinal />}
            </form>
        </section>
    );
};

export const StepContainer = ({ title, children }) => {
    return (
        <fieldset className="flex flex-col gap-3 items-center max-w-[480px] mx-auto">
            <legend className="text-2xl font-bold mb-7">{title}</legend>
            {children}
        </fieldset>
    );
};
