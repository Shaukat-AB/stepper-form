import { StepContainer } from "./MultiStepForm";

const budgetEntries = [
    { id: "budget", value: "< $1,000/mo" },
    { id: "budgetx2", value: "$1,000 - $2,000" },
    { id: "budgetx5", value: "$2,000 - $5,000" },
    { id: "budgetx10", value: "$5,000 - $10,000" },
    { id: "budgetx25", value: "$20,000 - $25,000" },
    { id: "budgetmax", value: "$25,000 + " },
];

export const StepOne = ({ onBudgetChange }) => {
    
    return (
        <StepContainer title={"What is your monthly digital marketing budget?"}>
            {budgetEntries.map((entry) => (
                <RadioCard
                    key={entry.id}
                    id={entry.id}
                    label={entry.value}
                    onChange={onBudgetChange}
                />
            ))}
        </StepContainer>
    );
};

const RadioCard = ({ id, label, onChange }) => {
    return (
        <div className="flex items-center w-full">
            <input
                id={id}
                type="radio"
                name="budget"
                className="hidden peer"
                value={label}
                onChange={(e) => onChange(e)}
            />
            <label
                htmlFor={id}
                className="w-full p-3.5 text-slate-600 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
            >
                {label}
            </label>
        </div>
    );
};
