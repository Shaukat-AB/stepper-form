import { StepContainer } from "./MultiStepForm";
import { HiLockClosed } from "react-icons/hi2";

export const StepTwo = ({ onDetailChange }) => {
    return (
        <StepContainer title={"Details"}>
            <div>
                <p className="text-sm text-gray-600">
                    We're thrilled at the opportunity to help you grow your
                    business online.
                </p>
                <p className="text-sm text-gray-600">
                    Please let us know the best way to reach you.
                </p>
            </div>

            <InputCard
                label="Name"
                type="text"
                name="username"
                onChange={onDetailChange}
            />
            <div className="flex gap-2 w-full">
                <InputCard
                    label="Email"
                    type="Email"
                    name="email"
                    onChange={onDetailChange}
                />
                <InputCard
                    label="Phone Number"
                    type="tel"
                    name="phonenumber"
                    onChange={onDetailChange}
                />
            </div>
            <label
                htmlFor="textarea"
                className="bg-white w-full text-sm text-left block mb-2 font-medium text-gray-900"
            >
                Anything else you like to share?
            </label>
            <textarea
                name="additionalinfo"
                className="bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                rows={4}
                onChange={(e) => onDetailChange(e)}
            />
            <button className="px-8 py-2 bg-green-600 text-white hover:bg-green-800">
                Send Request
            </button>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <HiLockClosed className="flex-shrink-0 w-4 h-4" />
                <p>
                    We promise to never share your information or spam your
                    inbox
                </p>
            </div>
        </StepContainer>
    );
};

const InputCard = ({ name = "", label = "", type = "text", onChange }) => {
    return (
        <div className="w-full">
            <label
                htmlFor={name}
                className=" text-left block mb-2 text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className="bg-white border-2 border-gray-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) => onChange(e)}
                required
            />
        </div>
    );
};
