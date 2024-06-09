export default function Header() {
    return (
        <div className="flex border-b border-[#251E47]">
            <div className="w-40 border-r border-[#251E47] flex justify-center items-center">
                <p className="text-white font-roboto text-lg font-semibold">POWER<a className="font-extra-light">SCALE</a></p>
            </div>
            <div className="rounded-md bg-[#5E5585] shadow-md shadow-black/25 pt-1 pb-1 pl-3 pr-3 m-2">
                <p className="text-white text-center font-roboto text-xs font-bold">RAW, DRUG TESTED</p>
            </div>
        </div>
    );
}