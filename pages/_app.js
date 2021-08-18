import "../styles/globals.css";
import "../styles/Layout.scss";
import "../styles/Header.scss";
import "../styles/Hero.scss";
import "../styles/Featured.scss";
import "../styles/Footer.scss";
import "../styles/Explore.scss";
import "../styles/Login.scss";
import "../styles/Card.scss";
import { useState } from "react";

function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} />;
}

export default MyApp;
