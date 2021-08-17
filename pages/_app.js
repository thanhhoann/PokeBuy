import "../styles/globals.css";
import "../styles/Header.scss";
import "../styles/Hero.scss";
import "../styles/Featured.scss";
import "../styles/Footer.scss";

import "../styles/Explore.scss";

import "../styles/Layout.scss";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
