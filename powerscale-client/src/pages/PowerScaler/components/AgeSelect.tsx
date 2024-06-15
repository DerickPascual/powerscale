import { FC } from 'react';
import Select from 'react-select';

interface AgeSelect {
    ageCategory: string;
    setAgeCategory: any;
}

const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: '6px',
      border: '1px solid #382F66',
      backgroundColor: '#211D41',
      boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)',
      '&:hover': {
        border: '1px solid #382F66',
      },
      fontWeight: '600',
      fontSize: '15px',
      outline: state.isFocused ? '1px solid #F2BF43' : 'none',
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: '6px',
      border: '1px solid #382F66',
      backgroundColor: '#211D41',
      boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)',
      marginTop: '5px', 
      fontWeight: '600',
      fontSize: '15px',
    }),
    option: (provided:any, state:any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#382F66' : state.isFocused ? '#2C2652' : '#211D41',
      color: '#B3B4D0',
        ':active': {
            color: 'white'
        },
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '15px'
    }),
    placeholder: (provided:any) => ({
      ...provided,
      color: '#B3B4D0',
      fontWeight: '600',
      fontSize: '15px'
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        color: state.isHovered || state.isFocused ? 'white' : '#B3B4D0',
        '&:hover': {
          color: 'white', 
        },
      }),
      clearIndicator: (provided: any, state: any) => ({
        ...provided,
        color: state.isHovered || state.isFocused ? 'white' : '#B3B4D0', 
        '&:hover': {
          color: 'white', 
        },
      }),
    singleValue: (provided: any, state: any) => ({
        ...provided,
        color: 'white', 
        fontWeight: '600', 
      }),
  };

const AgeSelect: FC<AgeSelect> = ({ ageCategory, setAgeCategory}) => {
    return (
        <div>
            <Select 
                styles={customStyles}
                className="w-44"
                placeholder="Age category"
                onChange={(option) => setAgeCategory(option?.value)}
                options={[
                    { value: '13 to 15', label: "13 to 15 years"},
                    { value: '16 to 19', label: "16 to 19 years"},
                    { value: '20 to 23', label: "20 to 23 years"},
                    { value: '24 to 39', label: "24 to 39 years"},
                    { value: '40 to 59', label: "40 to 59 years"},
                    { value: '60+', label: "60+ years" },
                    { value: 'All', label: 'All ages' }
                ]}

            />
        </div>
    );
}

export default AgeSelect;