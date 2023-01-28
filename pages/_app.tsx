import '../styles/globals.css';
import BetterHeader from '../components/BetterHeader'

function MyApp({Component, pageProps}) {
    return (
        <>
            <BetterHeader/>
            <Component {...pageProps} />
            <div className="mx-auto pt-4 pb-4" id="footer">
                <div className="text-sm text-white text-center md:text-md">
                    This project is sponsored by the Center for Digital Humanities at Princeton University
                </div>
                <div className="text-sm text-white text-center mt-2 md:text-md">
                    Copyright © 2022
                </div>
            </div>
        </>
    );
}

export default MyApp;
