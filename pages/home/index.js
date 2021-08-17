import React from "react";
import Featured from "../../components/UI/Featured";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";
import Hero from "../../components/UI/Hero";
import Layout from "../../components/UI/Layout";

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
