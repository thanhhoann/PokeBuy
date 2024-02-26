import React from "react";
import axios from "axios";
import Featured from "@/components/UI/Featured";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import Hero from "@/components/UI/Hero";
import Layout from "@/components/UI/Layout";
import { getStaticProps } from "@/utils/cards_helper";

export { getStaticProps };
export default function Home(props) {
  return (
    <>
      <Layout title="Home">
        <Header />
        <Hero cards={props.hero_cards} />
        <Featured cards={props.featured_cards} />
        <Footer />
      </Layout>
    </>
  );
}
