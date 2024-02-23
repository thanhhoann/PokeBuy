import React from "react";
import axios from "axios";
import Featured from "../components/UI/Featured";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import Hero from "../components/UI/Hero";
import Layout from "../components/UI/Layout";

// import { getPlaiceholder } from "plaiceholder";

export async function getStaticProps() {
  const featured_cards = await axios
    .get(process.env.FIREBASE_DB_URL + "featured_cards.json")
    .then((res) => res.data.data);

  const hero_cards = await axios
    .get(process.env.FIREBASE_DB_URL + "hero_cards.json")
    .then((res) => res.data.data);

  // const heroImages = await Promise.all(
  //   heroImagePaths.map(async (e) => {
  //     const { base64, img } = await getPlaiceholder(e);
  //     return {
  //       ...img,
  //       blurDataURL: base64,
  //     };
  //   }),
  // ).then((e) => e);

  return {
    props: {
      featured_cards,
      hero_cards,
    },
  };
}

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
