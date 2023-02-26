import React from 'react';
import Image from "next/image";


function HomeHero(props) {
    return (
        <section id="hero">
            <div className="container mx-auto relative">
                {/* Content Words */}
                <div
                    className="flex justify-center h-[15vh] items-top mx-auto w-[70%] md:w-[55%] md:h-[35vh] 3xl:w-[80%] pt-[7rem]">
                    <h1 className="text-white text-center font-medium text-[13px] md:text-[22px] 3xl:text-[50px] font-['Lato']
                     tracking-[.04rem]">
                        Fairy Web is a digital humanities project that includes information and
                        data visualizations about the 19th century British fairy tale.
                    </h1>
                </div>
            </div>
            {/* Content Images */}
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 relative h-[55vh] group">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 35%"} alt={"fairytale"}
                           src="/static/image1.jpg" placeholder="blur" blurDataURL="/static/image1.jpg"/>
                    <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                        <div className="flex justify-center w-full">
                            <div className="font-normal">
                                <p className="text-sm">Illustration by Richard Doyle for John Ruskin’s The King of the
                                    Golden River (from the first edition, published by Smith, Elder & Co. in 1851)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block w-full md:w-1/3 relative h-[55vh] group">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 20%"} alt={"fairytale"}
                           src="/static/image2.jpg" placeholder="blur" blurDataURL="/static/image2.jpg"/>
                    <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                        <div className="flex justify-center w-full">
                            <div className="font-normal">
                                <p className="text-sm">Illustration by Charles Ricketts & Charles Shannon for Oscar
                                    Wilde’s A House of Pomegranates (from the first edition, published by James R.
                                    Osgoode McIlvaine, 1891)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden w-full md:block md:w-1/3 relative h-[55vh] group">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 0%"} alt={"fairytale"}
                           src="/static/image3.jpg" placeholder="blur" blurDataURL="/static/image3.jpg"/>
                    <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                        <div className="flex justify-center w-full">
                            <div className="font-normal">
                                <p className="text-sm">Illustration by Walter Crane for Mary de Morgan’s The Necklace of
                                    Princess Fiorimonde and Other Stories (from the first edition, published by
                                    Macmillan & Co. in 1880)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
