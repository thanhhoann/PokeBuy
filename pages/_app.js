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

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { Providers } from "@/utils/providers";

const breakpoints = {
  base: "0px",
  mobile_M: "320px",
  mobile_L: "375px",
  mobile_L: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptop_L: "1440px",
  "4k": "2560px",
};

const theme = extendBaseTheme({
  breakpoints,
});

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Providers>
        <ChakraBaseProvider theme={theme}>
          <motion.div>
            <AuthContextProvider>
              <Provider store={store}>
                <Component {...pageProps} />;
              </Provider>
            </AuthContextProvider>
          </motion.div>
        </ChakraBaseProvider>
      </Providers>
    </>
  );
}

export default MyApp;
