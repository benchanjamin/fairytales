import Head from 'next/head'
import Timeline from "@components/Timeline";

export default function timeline() {
    return (
        <>
            <Head>
                <title>FairyWeb Timeline</title>
                <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossOrigin="anonymous">
                </script>
                <script
                    type="text/javascript" src="/static/timeline.js">
                </script>
            </Head>
            <Timeline/>
        </>
    )
}
