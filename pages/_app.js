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

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <motion.div>
          <AuthContextProvider>
            <Provider store={store}>
              <Component {...pageProps} />;
            </Provider>
          </AuthContextProvider>
        </motion.div>
      </ChakraBaseProvider>
    </>
  );
}

export default MyApp;
