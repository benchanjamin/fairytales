import {NavLink} from "@components/NavLink";
import Link from "next/link";

export default function BetterHeader() {
    return (
        <>
            <nav className="container relative mx-auto pt-6 h-[5vh] md:h-[10vh] p-6">

                <div className="flex-col items-start">
                    {/* Logo + Button */}
                    <div className="flex justify-between">
                        <h2 className="text-[14px] text-white text-left font-bold font-light pl-6 pr-6">FAIRY WEB</h2>

                        <button
                            id="menu-btn"
                            className="z-30 block md:hidden focus:outline-none hamburger pr-6"
                        >
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="hidden items-center justify-between space-x-30 md:flex text-[28px]
                    md:mt-[15px] pl-6 pr-6">
                        <NavLink href="/" exact
                                 className="text-white italic font-medium hover:text-lightBlue duration-75">Home</NavLink>
                        <NavLink href="/timeline" exact
                                 className="text-white italic font-medium hover:text-lightBlue duration-75">Timeline</NavLink>
                        <NavLink href="/map" exact
                                 className="text-white italic font-medium hover:text-lightBlue duration-75">Map</NavLink>
                        <NavLink href="/settings-and-locations" exact
                                 className="text-white italic font-medium hover:text-lightBlue duration-75">Settings
                            & Locations</NavLink>
                        <NavLink href="/about" exact
                                 className="text-white italic font-medium hover:text-lightBlue duration-75">About</NavLink>

                    </div>


                    <div
                        id="menu"
                        className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-lightBlack"
                    >
                        <div className="w-full py-3 text-center">
                            <Link href="/" className="block hover:text-softRed">Home</Link>
                        </div>
                        <div className="w-full py-3 text-center">
                            <Link href="/timeline" className="block hover:text-softRed">Timeline</Link>
                        </div>
                        <div className="w-full py-3 text-center">
                            <Link href="/settings-and-locations" className="block hover:text-softRed">Settings
                                & Locations</Link>
                        </div>
                        <div className="w-full py-3 text-center">
                            <Link href="/about" className="block hover:text-softRed">About</Link>
                        </div>
                    </div>
                </div>


            </nav>
        </>
    );
}
