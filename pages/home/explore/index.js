import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";
import { useMedia } from "use-media";

import Header from "../../../components/UI/Header";
import Hero from "../../../components/UI/Hero";
import Footer from "../../../components/UI/Footer";
import Layout from "../../../components/UI/Layout";
import Backdrop from "../../../components/UI/Backdrop";

export default function Explore(props) {
  const mobileS = useMedia({ maxWidth: "320px" });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Layout title="Explore">
        <Header />
        <Hero cards={props.hero}/>

        <div className="featured-container">
          <div className="title">
            <p>All Cards</p>
          </div>

          {isLoading && <Backdrop />}

          <main className="cards">
            {props.all.map((e, i) => (
              <Link key={i} href={`/home/explore/${e.id}`}>
                <div
                  className="card"
                  style={{ flex: mobileS && "0", margin: mobileS && "auto" }}
                >
                  <section
                    className="img-container"
                    onClick={() => setIsLoading(!isLoading)}
                  >
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
              </Link>
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

  const hero = await axios
    .get(
      "https://pokebuy-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/hero.json"
    )
    .then((res) => res.data);

  return {
    props: {
      all,
      hero,
    },
  };
}
