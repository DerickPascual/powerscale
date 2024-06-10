import { useState } from 'react';
import SexCard from "./components/SexCard";
import WeightInput from "./components/WeightInput";
import maleIcon from "../../assets/male-gender.png";
import settImg from "../../assets/sett.jpg";
import femaleIcon from "../../assets/femenine.png";
import viImg from "../../assets/vi.png";
import weightScaleIcon from "../../assets/weight-scale.png";
import weightScaleIconWhite from "../../assets/weight-scale-white.png";
import squatIcon from "../../assets/squat.png";
import squatIconWhite from "../../assets/squat-white.png";
import benchIcon from "../../assets/bench.png";
import benchIconWhite from "../../assets/bench-white.png";
import deadIcon from "../../assets/deadlift.png";
import deadIconWhite from "../../assets/deadlift-white.png";
import powerScaleBackground from "../../assets/powerscale-bg.png";

export default function PowerScaler() {
    const [selectedSex, setSelectedSex] = useState("");
    const [selectedUnits, setSelectedUnits] = useState("kg");

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
            <div className="flex space-x-3 items-center mb-5">
                <div className="w-48 h-60 flex items-center">
                    <SexCard sex={"Male"} selectedSex={selectedSex} setSelectedSex={setSelectedSex} sexIcon={maleIcon} champImg={settImg}/>
                </div>
                <div className="w-48 h-60 flex items-center justify-center">
                    <SexCard sex={"Female"} selectedSex={selectedSex} setSelectedSex={setSelectedSex} sexIcon={femaleIcon} champImg={viImg} />
                </div>
            </div>
            <div
                className="flex flex-col space-y-4"
            >
                <WeightInput icon={weightScaleIcon} whiteIcon={weightScaleIconWhite}field={"Bodyweight"} units={selectedUnits} />
                <WeightInput icon={squatIcon} whiteIcon={squatIconWhite} field={"Squat"} units={selectedUnits} />
                <WeightInput icon={benchIcon} whiteIcon={benchIconWhite} field={"Bench Press"} units={selectedUnits} />
                <WeightInput icon={deadIcon} whiteIcon={deadIconWhite} field={"Deadlift"} units={selectedUnits} />
            </div>
        </div>
    );
}