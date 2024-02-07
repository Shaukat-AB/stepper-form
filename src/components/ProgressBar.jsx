export const ProgressBar = ({ completedStep = 0 }) => {
    
    const widthOneThrid = completedStep == 1 && "w-1/3";
    const widthHalf = completedStep == 2 && "w-1/2";
    const widthFull = completedStep == 3 && "w-full";

    const width = widthOneThrid || widthHalf || widthFull || "w-0";

    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-6">
            <div className={`bg-green-600 h-full ${width}`}></div>
        </div>
    );
};
