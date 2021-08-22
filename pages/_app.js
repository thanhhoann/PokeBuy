import "../styles/globals.css";
import "../styles/Layout.scss";
import "../styles/Header.scss";
import "../styles/Hero.scss";
import "../styles/Featured.scss";
import "../styles/Footer.scss";
import "../styles/Explore.scss";
import "../styles/Login.scss";
import "../styles/Card.scss";
import "../styles/Cart.module.scss";

import { motion } from "framer-motion";

import { Provider } from "react-redux";
import store from "../store/store";
import { AuthContextProvider } from "../store/auth-context";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <motion.div>
        <AuthContextProvider>
          <Provider store={store}>
            <Component {...pageProps} />;
          </Provider>
        </AuthContextProvider>
      </motion.div>
    </>
  );
}

export default MyApp;
