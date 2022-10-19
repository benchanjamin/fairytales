export default function BetterHeader() {
    return (
        <>
            <nav className="container relative mx-auto p-6">
                <div className="flex-col items-start">
                    <div>
                        <h2 className="text-[10px] text-white text-left font-bold font-light">FAIRY WEB</h2>
                    </div>

                    <div className="hidden items-center justify-between space-x-56 md:flex text-[28px]
                    mt-[29px]">
                        {/* Change this color later to reflect active link*/}
                        <a className="text-lightBlue italic font-medium hover:text-lightBlue duration-75">Home</a>
                        <a className="text-white italic font-medium hover:text-lightBlue duration-75">Timeline</a>
                        <a className="text-white italic font-medium hover:text-lightBlue duration-75">Map</a>
                        <a className="text-white italic font-medium hover:text-lightBlue duration-75">Settings
                            & Locations</a>
                        <a className="text-white italic font-medium hover:text-lightBlue duration-75">About</a>
                    </div>
                </div>
            </nav>
        </>
    );
}
