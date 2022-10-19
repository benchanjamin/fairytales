import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import HomeHero from "@components/HomeHero";

export default function Home() {
    return (
        <>
           <Head>
               <title>FairyWeb Home</title>
           </Head>
            <HomeHero/>
        </>
    )
}
