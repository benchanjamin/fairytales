import React from 'react';
import Head from "next/head";
import HomeHero from "@components/HomeHero";
import Link from "next/link";

function About(props) {
    return (
        <>
            <Head>
                <title>FairyWeb About</title>
            </Head>
            <section id="about">
                <div className="container mx-auto relative">
                    {/* Content Words */}
                    <div
                        className=" md:pt-[7rem] pt-[3rem] flex justify-center items-start mx-auto w-[70%] md:w-[55%] 3xl:w-[80%] align-top mb-14">
                        <h1 className="text-white text-center font-medium text-[13px] md:text-[22px] 3xl:text-[50px] font-['Lato']
                     tracking-[.04rem]">

                            FairyWeb was created with funding from the Center for Digital Humanities at Princeton
                            University and initiated by Kate Clairmont, a PhD Candidate in the Department of English at
                            Princeton. The website is a companion to the research and dissertation of the project
                            “Magical Elsewheres: Setting and Place in the Nineteenth-Century Fairy Tale.”

                        </h1>
                    </div>

                    <Link href="/static/FairyWeb_literary-fairy-tale-database_list-of-texts.xlsx">
                        <button className="px-10 py-3 mb-5 bg-darkBlue rounded-xl block mx-auto text-gray-100 font-['Lato']">
                            Download the Fairy Web Database — List of Texts
                        </button>
                    </Link>

                    <Link href="/static/FairyWeb_literary-fairy-tale-database_full-texts.zip">
                        <button className="px-10 py-3 mb-5 bg-darkBlue rounded-xl block mx-auto text-gray-100 font-['Lato']">
                            Download the Fairy Web Database — Full Texts
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default About;
