import '../styles/globals.css';
import BetterHeader from '../components/BetterHeader'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BetterHeader/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
