import { FC, useState } from "react";
import "./WeightInput.css";

interface WeightInput {
    icon: any;
    whiteIcon: any;
    field: string;
    units: string;
}

const WeightInput: FC<WeightInput> = ({ icon, whiteIcon, field, units }) => {
    const [inputFocused, setInputFocused] = useState(false);

    

    return (
        <div
            className="flex items-center w-fit weight-input-container rounded-6px shadow-weight-input h-10"
        >   
            <div
                className="h-full flex items-center p-2 border-l border-t border-b border-[#382F66] bg-[#211D41] rounded-tl-6px rounded-bl-6px"
            >
                <img
                    src={inputFocused ? whiteIcon : icon} 
                    className="h-6"
                />
            </div>
            <input 
                type="text"
                placeholder={`${field} (${units})`}
                className="w-36 h-10 weight-input border border-[#382F66] bg-[#211D41]  rounded-tr-6px rounded-br-6px p-2 text-[#B3B4D0] focus:text-[#ffffff] font-semibold text-15px"
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
            />
        </div>
    );
}

export default WeightInput;