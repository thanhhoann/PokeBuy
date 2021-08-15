import Head from "next/head";
import Image from "next/image";

import Header from "../components/UI/Header";
import Hero from "../components/UI/Hero";
import Featured from "../components/UI/Featured";
import Footer from "../components/UI/Footer";
import Layout from "../components/UI/Layout";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <Header />
        <Hero />
        <Featured />
        <Footer />
      </Layout>
    </>
  );
}
