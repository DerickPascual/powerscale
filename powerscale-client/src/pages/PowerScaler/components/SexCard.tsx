import { FC } from 'react';
import './SexCard.css';

interface SexCard {
    sex: string;
    selectedSex: string;
    setSelectedSex: any;
    champImg: any;
    sexIcon: any;
}

const SexCard: FC<SexCard> = ({ sex, selectedSex, setSelectedSex, champImg, sexIcon }) => {

    return (
        <button 
            className={`absolute transition-width-height flex flex-col space-y-2 items-center pl-10 pr-10 pt-5 pb-5 bg-[#252046] rounded-md shadow-sex-card border border-[#382F66] ${sex === selectedSex ? 'w-48 h-56 border-[#F2BF43]' : 'w-44 h-52'} hover:border-[#F2BF43] hover:w-48 hover:h-56 hover:cursor-pointer`}
            onClick={() => setSelectedSex(sex)}
        >
            <div 
                className="w-24 h-24 rounded-[75px] border-[3px] border-[#F2BF43] overflow-hidden bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${champImg})` }}
            ></div>
            <p>{sex}</p>
            <img 
                src={sexIcon} 
                alt={`Icon for ${sex}`}
                className="w-6 h-6"
            />
        </button>  
    );
}

export default SexCard;