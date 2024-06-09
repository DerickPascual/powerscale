import { FC } from 'react';

interface NavigationItem {
    navPage: string;
    // Need to change to image type.
    icon: any;
    selectedPage: string;
    setSelectedPage: any;
    selectedIcon: string;
}

const NavigationItem: FC<NavigationItem> = ({ navPage, icon, selectedIcon, selectedPage, setSelectedPage }) => {
    const handleNavItemClick = () => {
        setSelectedPage(navPage);
    }

    return (
        <button 
            className={`w-40 flex items-center p-3 pl-5 hover:bg-[#271C37] ${selectedPage === navPage && "border-r border-yellow-select bg-[#271C37]"}`}
            onClick={handleNavItemClick}
        >
            <img
                className="w-5 mr-2"
                src={selectedPage === navPage ? selectedIcon : icon}
                alt="Navigation Icon"
            />
            <span
                className={`text-[13px] font-bold ${selectedPage === navPage ? 'text-[#F2BF43]' : 'text-[#B3B4D0]'}`}
            >
                {navPage}
            </span>
        </button>
    );
}

export default NavigationItem;