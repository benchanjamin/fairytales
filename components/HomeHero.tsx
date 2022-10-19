import React from 'react';
import Image from "next/image";
import image1 from "../public/image1.png"
import image2 from "../public/image2.png"
import image3 from "../public/image3.png"


function HomeHero(props) {
    return (
        <section id="hero">
            <div className="container mt-[167px] mx-auto">
                {/*    Content Words */}
                <div className="mx-auto w-[55%]">
                    <h1 className="text-white text-center font-medium text-[28px]">
                        Fairy Web is a digital humanities project that includes information and
                        data visualizations about the 19th century British fairy tale.
                    </h1>
                </div>
                <div className="flex flex-col justify-center mx-auto md:flex-row mt-[212px]">
                    <Image src={image1}/>
                    <Image src={image2}/>
                    <Image src={image3}/>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
