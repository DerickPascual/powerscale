import { FC, useState, ChangeEvent } from "react";
import "./WeightInput.css";

interface WeightInput {
    icon: any;
    whiteIcon: any;
    value: string;
    setValue: any;
    field: string;
    units: string;
}

const WeightInput: FC<WeightInput> = ({ icon, whiteIcon, value, setValue, field, units }) => {
    const [inputFocused, setInputFocused] = useState(false);

    /* Guarantee that input is composed of digits */
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (/^\d*$/.test(e.target.value)) {
            setValue(e.target.value);
        }
    }

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
            <div className="relative">
                <input 
                    type="text"
                    placeholder={`${field} (${units})`}
                    className="w-36 h-10 weight-input border border-[#382F66] bg-[#211D41]  rounded-tr-6px rounded-br-6px p-2 text-[#ffffff] focus:text-[#ffffff] font-semibold text-15px"
                    value={value}
                    onChange={handleInputChange}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                />
                <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${inputFocused ? 'text-[#ffffff]' : 'text-[#B3B4D0]'} font-semibold text-15px`}>{value && ` ${units}`}</span>
            </div>
        </div>
    );
}

export default WeightInput;