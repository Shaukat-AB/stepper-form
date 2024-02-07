import { StepContainer } from "./MultiStepForm";

export const StepFinal = () => {
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gray-200" aria-hidden="true"></div>
            <StepContainer
                title={"Your Request for a Proposal Has Been Submitted!"}
            >
                <p className="text-sm text-gray-600 mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam quasi tenetur eum nihil id temporibus, ut totam hic
                    earum natus labore recusandae rem, aliquam enim, incidunt
                    corrupti impedit vitae. Laborum!
                </p>
                <button className="px-8 py-2 bg-green-600 text-white hover:bg-green-800">
                    Return Home
                </button>
            </StepContainer>
        </div>
    );
};
