import Head from "next/head";
import Image from "next/image";
import Tilt from "react-tilt";

import { motion } from "framer-motion";
import pokecoinSVG from "../public/pokecoin.svg";
import TextLoop from "react-text-loop";

import megaPokemons from "../pokemonsDB/mega.json";

import Header from "../components/UI/Header";
import Hero from "../components/UI/Hero";
import Featured from "../components/UI/Featured";
import Footer from "../components/UI/Footer";
import Layout from "../components/UI/Layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  const easing = [1, 1.16, 1, -0.39];

  const wrapperVariants = {
    initial: {
      clipPath: "circle(3.7% at 50% 50%)",
    },
    animate: {
      clipPath: "circle(70.7% at 50% 50%)",
      transition: { duration: 4.8, ease: easing },
    },
  };

  return (
    <>
      {isLoading ? (
        <motion.div className="loading-screen">
          <motion.section
            className="title-container"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <section>
              <h1>Póke</h1>
            </section>

            <TextLoop>
              <h1>mons. Buy.</h1>
              <h1>Buy.</h1>
            </TextLoop>
          </motion.section>
        </motion.div>
      ) : (
        <Layout title="Home">
          <Header />
          <Hero />

          <div className="featured-container">
            <div className="title">
              <p>Featured Cards</p>
            </div>

            <main className="cards">
              {megaPokemons.data.slice(0, 40).map((e) => (
                <div key={e.id} className="card">
                  <section className="img-container">
                    <Tilt
                      options={{ max: 25, perspective: 900, scale: 1.1 }}
                      className="img-container"
                    >
                      <div className="tilt-inner">
                        <Image
                          src={e.images.large}
                          layout="fill"
                          objectFit="fit"
                        />
                      </div>
                    </Tilt>
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
      )}
      )
    </>
  );
}
