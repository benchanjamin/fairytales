import {NavLink} from "@components/NavLink";
import Link from "next/link";

export default function BetterHeader() {
    return (
        <>
            <div className="h-[5vh] p-6">
                <div className="flex justify-between">
                    <h2 className="text-[14px] text-white text-left font-bold font-light pl-6 pr-6 font-['Lato']">
                        FAIRY WEB</h2>

                    <button
                        id="menu-btn"
                        className="z-30 block md:hidden focus:outline-none hamburger"
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </div>
            {/* Menu Items */}
            <nav className="hidden items-center justify-between space-x-30 md:flex md:text-[24px] text-[28px] xl:text-[32px]
                    md:mt-[15px] pl-12 pr-12">
                <NavLink href="/" exact
                         className="text-white italic font-medium hover:text-lightBlue duration-75 w-[100px]">Home</NavLink>
                <NavLink href="/timeline" exact
                         className="text-white italic font-medium hover:text-lightBlue duration-75">Timeline</NavLink>
                <NavLink href="/map" exact
                         className="text-white italic font-medium hover:text-lightBlue duration-75">Map</NavLink>
                {/*<NavLink href="/settings-and-locations" exact*/}
                {/*         className="text-white italic font-medium hover:text-lightBlue duration-75">Settings*/}
                {/*    & Locations</NavLink>*/}
                <NavLink href="/about" exact
                         className="text-white italic font-medium hover:text-lightBlue duration-75">About</NavLink>
            </nav>
            <div className="relative mx-auto">
                <div className="flex-col items-start">
                    {/* Logo + Button */}




                    <div
                        id="menu"
                        className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-lightBlack font-['Lato']"
                    >
                        <div className="w-full py-3 text-center nav-mobile-menu">
                            <Link href="/" className="block hover:text-softRed">Home</Link>
                        </div>
                        <div className="w-full py-3 text-center nav-mobile-menu">
                            <Link href="/timeline" className="block hover:text-softRed">Timeline</Link>
                        </div>
                        <div className="w-full py-3 text-center nav-mobile-menu">
                            <Link href="/map" className="block hover:text-softRed">Map</Link>
                        </div>
                        <div className="w-full py-3 text-center nav-mobile-menu">
                            <Link href="/about" className="block hover:text-softRed">About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
