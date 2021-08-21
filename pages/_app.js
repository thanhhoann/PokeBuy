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
  const easing = [0.63, 0.1, 0.69, 0.03];

  return (
    <>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageAnimate: {
            clipPath: [" inset(0 100% 0 0)", " inset(0 0% 0 0)"],
            transition: {
              duration: 0.5,
              ease: easing,
            },
          },
        }}
      >
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
