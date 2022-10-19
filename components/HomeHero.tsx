import React from 'react';
import Image from "next/image";
import image1 from "../public/image1.jpg"
import image2 from "../public/image2.jpg"
import image3 from "../public/image3.jpg"


function HomeHero(props) {
    return (
        <section id="hero">
            <div className="container mx-auto relative">
                {/* Content Words */}
                <div className="flex justify-center h-[15vh] items-center mx-auto w-[55%] md:h-[30vh] 3xl:w-[80%]">
                    <h1 className="text-white text-center font-medium text-md md:text-[28px] 3xl:text-[50px]">
                        Fairy Web is a digital humanities project that includes information and
                        data visualizations about the 19th century British fairy tale.
                    </h1>
                </div>
            </div>
            {/* Content Images */}
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 relative h-[55vh]">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 35%"} alt={"fairytale"}
                           src={image1}/>
                </div>
                <div className="w-full md:w-1/3 relative h-[55vh]">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 20%"} alt={"fairytale"}
                           src={image2}/>
                </div>
                <div className="w-full md:w-1/3 relative h-[55vh]">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 0%"} alt={"fairytale"}
                           src={image3}/>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
