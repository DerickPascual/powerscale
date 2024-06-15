import { FC, MouseEventHandler} from 'react';

interface YellowButton {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const YellowButton: FC<YellowButton> = ({ text, onClick }) => {
    return (
        <button 
            className="rounded-6px bg-[#F2BF43] p-2 pl-3 pr-3 shadow-weight-input hover:opacity-80"
            onClick={onClick}
        >
            <p className="font-bold text-[#151136] text-sm">{text}</p>
        </button>
    );
}

export default YellowButton;