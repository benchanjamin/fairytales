import Head from 'next/head'
import Map from "@components/Map/Map"
import Script from "next/script";

import React from "react";

export default function map() {
    return (
        <>
            <Head>
                <title>Fairy Web Map</title>
            </Head>
            <Map/>
        </>
    )
}
