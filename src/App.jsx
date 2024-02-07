import { Header } from "./components/Header";
import { MultiStepForm } from "./components/MultiStepForm";
import { ProgressBar } from "./components/ProgressBar";
import { useState } from "react";
function App() {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className="bg-gray-50">
            <Header height={currentStep != 2 ? "normal" : "high"} />
            <ProgressBar completedStep={currentStep} />
            <main className="px-4 lg:px-10 max-w-7xl">
                <MultiStepForm stepState={[currentStep, setCurrentStep]} />
            </main>
        </div>
    );
}

export default App;
