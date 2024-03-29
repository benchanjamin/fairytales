import React from 'react';
import Image from "next/image";
import Link from "next/link";


const imageKitLoader = ({src, width, quality}) => {
    if (src[0] === "/") src = src.slice(1);
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");
    let urlEndpoint = "https://ik.imagekit.io/mezdticvf";
    if (urlEndpoint[urlEndpoint.length - 1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`
}

function HomeHero(props) {
    return (
        <section id="hero">
            <div className="container mx-auto relative">
                {/* Content Words */}
                <div
                    className="flex justify-center pt-[3rem] h-[25vh] items-top mx-auto w-[70%] md:w-[55%] md:h-[35vh] 3xl:w-[80%] md:pt-[7rem]">
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
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 35%"}
                           alt="Richard Doyle Illustration"
                           loader={imageKitLoader}
                           src="image1.jpg"
                    />
                    <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                        <div className="flex justify-center w-full">
                            <div className="font-normal">
                                <p className="text-sm">Illustration by Richard Doyle for John Ruskin’s The King of the
                                    Golden River (from the first edition, published by Smith, Elder & Co. in 1851).
                                </p>
                                <p className="text-sm">
                                    Photo taken from {" "}
                                    <span className="text-lightBlue">
                                    <Link href="https://catalog.princeton.edu/catalog/9939366463506421">
                                        Princeton University Special Collections.
                                    </Link>
                                        </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block w-full md:w-1/3 relative h-[55vh] group">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 20%"}
                           alt="Charles Ricketts & Charles Shannon Illustration"
                           loader={imageKitLoader}
                           src="image2.jpg"/>
                    <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                        <div className="flex justify-center w-full">
                            <div className="font-normal">
                                <p className="text-sm">
                                    Illustration by Charles Ricketts & Charles Shannon for Oscar
                                    Wilde’s A House of Pomegranates (from the first edition, published by James R.
                                    Osgoode McIlvaine, 1891).</p>
                                <p className="text-sm">
                                    Photo taken from {" "}
                                    <span className="text-lightBlue">

                                    <Link href="https://catalog.princeton.edu/catalog/9924499343506421">
                                        Princeton University Special Collections.
                                    </Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden w-full md:block md:w-1/3 relative h-[55vh] group">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 0%"} alt="Walter Crane Illustration"
                           loader={imageKitLoader}
                           src="image3.jpg"/>
                    <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                        <div className="flex justify-center w-full">
                            <div className="font-normal">
                                <p className="text-sm">
                                    Illustration by Walter Crane for Mary de Morgan’s The Necklace of
                                    Princess Fiorimonde and Other Stories (from the first edition, published by
                                    Macmillan & Co. in 1880).</p>
                                <p className="text-sm">
                                    Photo taken from {" "}
                                    <span className="text-lightBlue">
                                    <Link href="https://catalog.princeton.edu/catalog/9915476373506421">
                                        Princeton University Special Collections.
                                    </Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
