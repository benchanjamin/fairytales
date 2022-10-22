import '../styles/globals.css';
import BetterHeader from '../components/BetterHeader'

function MyApp({Component, pageProps}) {
    return (
        <>
            <BetterHeader/>
            <Component {...pageProps} />
            <div className="mx-auto pt-4 pb-4">
                <div className="text-white text-center">
                    This project is sponsored by the Center for Digital Humanities at Princeton University
                </div>
            </div>
        </>
    );
}

export default MyApp;
