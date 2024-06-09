import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationItem from "./NavigationItem/NavigationItem";
import powerScaleIcon from "../../assets/graph.png";
import selectedPowerScaleIcon from "../../assets/selected-graph.png";
import faqIcon from "../../assets/question-mark.png";
import selectedFaqIcon from "../../assets/selected-question-mark.png";

export default function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    /* Set selected page on initial render */
    const [selectedPage, setSelectedPage] = useState(() => {
        if (pathname === "/" || pathname === "/powerscale") {
            return "Power Scaler";
        }

        if (pathname === "/faq") {
            return "FAQ";
        }

        return "Power Scaler";
    });

    /* Handles changes in the selected page. */
    useEffect(() => {
        if (selectedPage === "Power Scaler" && pathname !== "/" && pathname !== "/powerscale") {
            navigate("/powerscale");
        }

        if (selectedPage === "FAQ" && pathname !== "faq") {
            navigate("/faq");
        }
    }, [selectedPage])

    return (
        <div className="w-40 border-r border-[#251E47] h-screen">
            <NavigationItem 
                navPage={"Power Scaler"} 
                icon={powerScaleIcon} 
                selectedIcon={selectedPowerScaleIcon}
                selectedPage={selectedPage}  
                setSelectedPage={setSelectedPage}
            />
            <NavigationItem 
                navPage={"FAQ"} 
                icon={faqIcon}
                selectedIcon={selectedFaqIcon}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
        </div>
    );
}