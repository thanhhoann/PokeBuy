import { Provider } from "next-auth/client";

import "../styles/globals.css";
import "../styles/Layout.scss";
import "../styles/Header.scss";
import "../styles/Hero.scss";
import "../styles/Featured.scss";
import "../styles/Footer.scss";
import "../styles/Explore.scss";
import "../styles/Login.scss";
import "../styles/Card.scss";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
