import { HiArrowLeft, HiXMark } from "react-icons/hi2";

export const Header = ({ height = "normal" }) => {
    const h = height && height != "normal" ? "h-[68px] mb-0" : "h-[38px] mb-3";
    return (
        <header
            className={`${h} p-4 lg:px-[120px] bg-white flex justify-between items-center w-full`}
        >
            <div className="flex items-center justify-center gap-2">
                <HiArrowLeft className="flex-shrink-0 w-4 h-4" />
                <span>Go back</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span>Exist</span>
                <HiXMark className="flex-shrink-0 w-4 h-4" />
            </div>
        </header>
    );
};
