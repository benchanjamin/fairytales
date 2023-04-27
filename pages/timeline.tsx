import Head from 'next/head'
import Timeline from "@components/Timeline/Timeline";
import Script from "next/script";

export default function timeline() {
    return (
        <>
            <Head>
                <title>Fairy Web Timeline</title>
            </Head>
            <Timeline/>
        </>
    )
}
