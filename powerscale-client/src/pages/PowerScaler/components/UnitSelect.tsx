import { FC } from 'react';
import lbs from '../../../assets/lbs.png';
import lbsWhite from '../../../assets/lbs-white.png';
import kg from '../../../assets/kg.png';
import kgWhite from '../../../assets/kg-white.png';

interface UnitSelect {
    selectedUnit: string;
    setSelectedUnit: any;
}

const UnitSelect: FC<UnitSelect> = ({ selectedUnit, setSelectedUnit }) => {
    const handleSelect = (value: string) => {
        setSelectedUnit(value);
    }

    return (
        <div className="flex">
            <button 
                className={`p-2 border ${selectedUnit === 'lbs' ? 'border-[#F2BF43]' : 'border-[#382F66]'} bg-[#211D41] hover:bg-[#2C274F] rounded-tl-10px rounded-bl-10px`}
                onClick={() => handleSelect('lbs')}
            >
                <img className="h-7" src={selectedUnit === 'lbs' ? lbsWhite : lbs} />
            </button>
            <button 
                className={`p-2 border ${selectedUnit === 'kg' ? 'border-[#F2BF43]' : 'border-[#382F66]'} bg-[#211D41] hover:bg-[#2C274F] rounded-tr-10px rounded-br-10px`}
                onClick={() => handleSelect('kg')}
            >
                <img className="h-7" src={selectedUnit === 'kg' ? kgWhite : kg} />
            </button>
        </div>
    );
}

export default UnitSelect;