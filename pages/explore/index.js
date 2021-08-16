import React from "react";
import Image from "next/image";
import Layout from "../../components/UI/Layout";
import Header from "../../components/UI/Header";
import Hero from "../../components/UI/Hero";
import Footer from "../../components/UI/Footer";

import pokemons from "../../pokemonsDB/pokemons.json";

export default function Explore() {
  return (
    <>
      <Layout title="Explore">
        <Header />
        <Hero />

        <main className="cards">
          {pokemons.data.map((e) => (
            <div key={e.id} className="card">
              <section className="img-container">
                <Image
                  src={e.images.large}
                  layout="fill"
                  objectFit="fit"
                  priority="true"
                  quality="96"
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

        <Footer />
      </Layout>
    </>
  );
}
