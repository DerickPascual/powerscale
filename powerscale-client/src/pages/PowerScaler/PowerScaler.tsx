import { useState } from 'react';
import SexCard from "./components/SexCard";
import maleIcon from "../../assets/male-gender.png";
import settImg from "../../assets/sett.jpg";
import femaleIcon from "../../assets/femenine.png";
import viImg from "../../assets/vi.png";
import powerScaleBackground from "../../assets/powerscale-bg.png";

export default function PowerScaler() {
    const [selectedSex, setSelectedSex] = useState("");

    return (
        <div
            className="bg-center bg-cover bg-no-repeat p-2 pl-4 pb-20"
            style={{ backgroundImage: `url(${powerScaleBackground})`}}
        >
            <p className="font-oswald text-xl font-500 text-24px mb-2">
                DISCOVER WHERE YOU STRENGTH RANKS IN THE LEAGUE OF LIFTERS.
            </p>
            <p className="text-[#B3B4D0] mb-5">
                Find out how your SBD stacks up against <span className="text-[#F2BF43]">1,234,567 others</span>.
            </p>
            <div className="flex space-x-3 items-center">
                <div className="w-48 h-60 flex items-center justify-center">
                    <SexCard sex={"Male"} selectedSex={selectedSex} setSelectedSex={setSelectedSex} sexIcon={maleIcon} champImg={settImg}/>
                </div>
                <div className="w-48 h-60 flex items-center justify-center">
                    <SexCard sex={"Female"} selectedSex={selectedSex} setSelectedSex={setSelectedSex} sexIcon={femaleIcon} champImg={viImg} />
                </div>
            </div>
        </div>
    );
}