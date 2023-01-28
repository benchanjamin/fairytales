import Head from 'next/head'
import Timeline from "@components/Timeline/Timeline";
import Script from "next/script";

export default function timeline() {
    return (
        <>
            <Head>
                <title>FairyWeb Timeline</title>
            </Head>
            <Timeline/>
        </>
    )
}
