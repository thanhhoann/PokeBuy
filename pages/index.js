import React from "react";
import axios from "axios";
import Featured from "../components/UI/Featured";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import Hero from "../components/UI/Hero";
import Layout from "../components/UI/Layout";

// import { getPlaiceholder } from "plaiceholder";

import db from "../pokemonsDB/featured.json";
import db_images from "../pokemonsDB/images.json";

export async function getStaticProps() {
  // const featured = await axios
  //   .get(
  //     "https://pokebuy-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/featured.json"
  //   )
  //   .then((res) => res.data);
  //
  // const heroImagePaths = await axios
  //   .get(
  //     "https://pokebuy-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/hero.json"
  //   )
  //   .then((res) => res.data);

  const featured = db.data;
  const heroImages = db_images;

  // const heroImages = await Promise.all(
  //   heroImagePaths.map(async (e) => {
  //     const { base64, img } = await getPlaiceholder(e);
  //     return {
  //       ...img,
  //       blurDataURL: base64,
  //     };
  //   }),
  // ).then((e) => e);
  //
  return {
    props: {
      featured,
      heroImages,
    },
  };
}

export default function Home(props) {
  return (
    <>
      <Layout title="Home">
        <Header />
        <Hero cards={props.heroImages} />
        <Featured cards={props.featured} />
        <Footer />
      </Layout>
    </>
  );
}
