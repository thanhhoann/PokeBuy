import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/UI/Layout";
import Header from "../../../components/UI/Header";
import Footer from "../../../components/UI/Footer";

import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { useMedia } from "use-media";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart";

export default function Card(props) {
  const { name, cardmarket, images, subtypes, supertype, types } = props.data;

  console.log(name);

  const [tempCart, setTempCart] = useState(0);
  const [selected, setSelected] = useState("");
  const [notSelected, setNotSelected] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const tablet = useMedia({ maxWidth: "768px" });
  const mobileL = useMedia({ maxWidth: "425px" });
  const mobileM = useMedia({ maxWidth: "400px" });

  const typeImg = types.map((e, i) => (
    <Image
      key={i}
      src={`/${e.toLowerCase()}.png`}
      width={50}
      height={50}
      alt="Card"
    />
  ));

  const trendPriceHandler = () => {
    if (selected === "trendPriceHandler") {
      setSelected("");
    } else {
      setSelected("trendPriceHandler");
    }
    setNotSelected(false);
    setTempCart(Math.round(Number(cardmarket.prices.trendPrice)));
  };

  const oneDayVenueHandler = () => {
    if (selected === "oneDayVenueHandler") {
      setSelected("");
    } else {
      setSelected("oneDayVenueHandler");
    }
    setNotSelected(false);
    setTempCart(Math.round(Number(cardmarket.prices.avg1)));
  };

  const sevenDayVenueHandler = () => {
    if (selected === "sevenDayVenueHandler") {
      setSelected("");
    } else {
      setSelected("sevenDayVenueHandler");
    }
    setNotSelected(false);
    setTempCart(Math.floor(Number(cardmarket.prices.avg7)));
  };

  const thirtyDayVenueHandler = () => {
    if (selected === "thirtyDayVenueHandler") {
      setSelected("");
    } else {
      setSelected("thirtyDayVenueHandler");
    }
    setNotSelected(false);
    setTempCart(Math.round(Number(cardmarket.prices.avg30)));
  };

  const addToCartHandler = () => {
    if (selected === "") {
      setNotSelected(true);
      setIsAdded(false);
    } else {
      setIsAdded(true);
      dispatch(cartActions.totalCart(tempCart));
      dispatch(
        cartActions.checkout({
          price: tempCart,
          name: name,
          image: images.small,
        })
      );
    }
  };

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
                    <span
                      key={i}
                      style={{
                        display: mobileM && "flex",
                        flexDirection: mobileM && "column",
                      }}
                    >
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
              <section
                onClick={trendPriceHandler}
                style={{
                  backgroundColor: selected === "trendPriceHandler" && "black",
                  color: selected === "trendPriceHandler" && "white",
                }}
              >
                <h3>Price trend</h3>
                <h4>{cardmarket.prices.trendPrice} €</h4>
              </section>

              <section
                onClick={oneDayVenueHandler}
                style={{
                  backgroundColor: selected === "oneDayVenueHandler" && "black",
                  color: selected === "oneDayVenueHandler" && "white",
                }}
              >
                <h3>1 day venue</h3>
                <h4>{cardmarket.prices.avg1} €</h4>
              </section>

              <motion.section
                onClick={sevenDayVenueHandler}
                style={{
                  backgroundColor:
                    selected === "sevenDayVenueHandler" && "black",
                  color: selected === "sevenDayVenueHandler" && "white",
                }}
              >
                <h3>7 day venue</h3>
                <h4>{cardmarket.prices.avg7} €</h4>
              </motion.section>

              <section
                onClick={thirtyDayVenueHandler}
                style={{
                  backgroundColor:
                    selected === "thirtyDayVenueHandler" && "black",
                  color: selected === "thirtyDayVenueHandler" && "white",
                }}
              >
                <h3>30 day venue</h3>
                <h4>{cardmarket.prices.avg30} €</h4>
              </section>
            </div>
            <div className="attack"></div>

            <div className="addToCart" onClick={addToCartHandler}>
              Add to Cart
            </div>
            {notSelected && <h4>Please select a price plan</h4>}
            {isAdded && !notSelected && (
              <section className="successful">
                <h4>Successfully added 😆</h4>
                <Link href="/explore">
                  <a>
                    <div className="successful-dialog">
                      Catch more pókemons ✨
                    </div>
                  </a>
                </Link>
              </section>
            )}
          </section>
        </main>

        <Footer />
      </Layout>
    </>
  );
}

// export async function getStaticPaths() {
// const res = await fetch(
// "https://pokebuy-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/all.json"
// );
// const data = await res.json();

// const paths = data.slice(0, 150).map((e) => ({
// params: { id: e.id },
// }));

// return { paths, fallback: false };
// }

export async function getServerSideProps({ params }) {
  try {
    const data = await axios
      .get(`https://api.pokemontcg.io/v2/cards/${params.id}`, {
        headers: {
          "X-API-Key": "b53e5d64-502e-4837-948b-8d092e16fa09",
        },
      })
      .then((res) => res.data.data);
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}
