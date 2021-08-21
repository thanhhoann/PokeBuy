import React from "react";
import axios from "axios";
import Featured from "../../components/UI/Featured";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";
import Hero from "../../components/UI/Hero";
import Layout from "../../components/UI/Layout";

export default function Home(props) {
  return (
    <>
      <Layout title="Home">
        <Header />
        <Featured cards={props.featured} />
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const featured = await axios
    .get(
      "https://pokebuy-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/featured.json"
    )
    .then((res) => res.data);

  const hero = await axios
    .get(
      "https://pokebuy-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/hero.json"
    )
    .then((res) => res.data);

  return {
    props: {
      featured,
      hero,
    },
  };
}
