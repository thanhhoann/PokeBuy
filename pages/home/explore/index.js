import React from "react";
import Image from "next/image";

import axios from "axios";

import Header from "../../../components/UI/Header";
import Hero from "../../../components/UI/Hero";
import Footer from "../../../components/UI/Footer";
import Layout from "../../../components/UI/Layout";

export default function Explore(props) {
  return (
    <>
      <Layout title="Explore">
        <Header />
        <Hero />

        <div className="featured-container">
          <div className="title">
            <p>All Cards</p>
          </div>

          <main className="cards">
            {props.all.map((e, i) => (
              <div key={i} className="card">
                <section className="img-container">
                  <Image
                    src={e.images.small}
                    layout="fill"
                    objectFit="fit"
                    priority="true"
                    quality="100"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89OhSPQAIGwMHvnhFoQAAAABJRU5ErkJggg=="
                  />
                </section>
                <section>
                  <h3>{e.name}</h3>
                  <p> $ {e.cardmarket.prices.trendPrice} </p>
                </section>
              </div>
            ))}
          </main>
        </div>

        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const all = await axios
    .get(
      "https://pokebuy-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/all.json"
    )
    .then((res) => res.data);

  return {
    props: {
      all,
    },
  };
}
