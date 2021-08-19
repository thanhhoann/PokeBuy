import "../styles/globals.css";
import "../styles/Layout.scss";
import "../styles/Header.scss";
import "../styles/Hero.scss";
import "../styles/Featured.scss";
import "../styles/Footer.scss";
import "../styles/Explore.scss";
import "../styles/Login.scss";
import "../styles/Card.scss";

import { motion } from "framer-motion";

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
              duration: 1,
              ease: easing,
            },
          },
        }}
      >
        <Component {...pageProps} />;
      </motion.div>
    </>
  );
}

export default MyApp;
