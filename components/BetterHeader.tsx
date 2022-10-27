import {NavLink} from "@components/NavLink";

export default function BetterHeader() {
    return (
        <>
            <nav className="container relative mx-auto pt-6 h-[10vh]">
                <div className="flex-col items-start">
                    <div>
                        <h2 className="text-[14px] text-white text-left font-bold font-light pl-6 pr-6">FAIRY WEB</h2>
                    </div>

                    <div className="hidden items-center justify-between space-x-30 md:flex text-[28px]
                    mt-[15px] pl-6 pr-6">
                        <NavLink href="/" exact className="text-white italic font-medium hover:text-lightBlue duration-75">Home</NavLink>
                        <NavLink href="/timeline" exact className="text-white italic font-medium hover:text-lightBlue duration-75">Timeline</NavLink>
                        <NavLink href="/map" exact className="text-white italic font-medium hover:text-lightBlue duration-75">Map</NavLink>
                        <NavLink href="/settings-and-locations" exact className="text-white italic font-medium hover:text-lightBlue duration-75">Settings
                            & Locations</NavLink>
                        <NavLink href="/about" exact className="text-white italic font-medium hover:text-lightBlue duration-75">About</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
}
