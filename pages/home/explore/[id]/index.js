import axios from "axios";
import Image from "next/image";
import Layout from "../../../../components/UI/Layout";
import Header from "../../../../components/UI/Header";
import Footer from "../../../../components/UI/Footer";
import ContentLoader from "react-content-loader";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { useMedia } from "use-media";
import { useState } from "react";

export default function Card(props) {
  const [isLoading, setIsLoading] = useState(true);
  const tablet = useMedia({ maxWidth: "768px" });
  const mobileL = useMedia({ maxWidth: "425px" });
  const mobileM = useMedia({ maxWidth: "400px" });
  const mobileS = useMedia({ maxWidth: "320px" });

  const { name, cardmarket, images, subtypes, supertype, types } = props.data;

  const typeImg = types.map((e) => (
    <Image src={`/${e}.png`} width={50} height={50} />
  ));

  return (
    <>
      <Layout title={name}>
        <Header />
        <main
          className="id-container"
          style={{
            display: tablet && "flex",
            alignItems: tablet && "center",
            flexDirection: tablet && "column",
            marginTop: tablet && "200px",
          }}
        >
          <div className="card">
            <Tilt
              className="tilt-container"
              options={{ max: 25, perspective: 900, scale: 1.1 }}
            >
              <motion.div className="tilt-inner">
                <section
                  className="img-container"
                  style={{
                    width: mobileL && (mobileM ? "280px" : "350px"),
                    height: mobileL && (mobileM ? "380px" : "450px"),
                  }}
                >
                  <Image
                    src={images.large}
                    layout="fill"
                    objectFit="fit"
                    priority="true"
                    quality="100"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89OhSPQAIGwMHvnhFoQAAAABJRU5ErkJggg=="
                  />
                </section>
              </motion.div>
            </Tilt>
          </div>

          <section className="info" style={{ margin: mobileM && "80px 0" }}>
            <div className="title">
              <section
                className="name"
                style={{ fontSize: mobileM && "1.5rem" }}
              >
                <h1>{name}</h1>
              </section>
              <section>{typeImg}</section>
            </div>

            <div className="type">
              <section>
                <h3>
                  {supertype}{" "}
                  {subtypes.map((e, i) => (
                    <span key={i} style={{ display: mobileS && "flex" }}>
                      {e}
                    </span>
                  ))}
                </h3>
              </section>
            </div>

            <div
              className="prices"
              style={{
                display: mobileL && "flex",
                flexWrap: mobileL && "wrap",
                justifyContent: mobileL && "center",
              }}
            >
              <section>
                <h3>Price trend</h3>
                <h4>{cardmarket.prices.trendPrice} €</h4>
              </section>

              <section>
                <h3>1 day venue</h3>
                <h4>{cardmarket.prices.avg1} €</h4>
              </section>

              <section>
                <h3>7 day venue</h3>
                <h4>{cardmarket.prices.avg7} €</h4>
              </section>

              <section>
                <h3>30 day venue</h3>
                <h4>{cardmarket.prices.avg30} €</h4>
              </section>
            </div>
            <div className="attack"></div>
          </section>
        </main>

        <Footer />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const data = await axios
    .get(`https://api.pokemontcg.io/v2/cards/${query.id}`, {
      headers: {
        "X-API-Key": "b53e5d64-502e-4837-948b-8d092e16fa09",
      },
    })
    .then((res) => res.data.data);
  return { props: { data } };
}
