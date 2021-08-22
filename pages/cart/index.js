import React from "react";
import Layout from "../../components/UI/Layout";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Cart() {
  const newItems = useSelector((state) => state.cart.newItem);

  return (
    <>
      <Layout title="Cart">
        <Header />
        <div className="featured-container">
          <div className="title">
            <p>YOUR CARDS</p>
            {newItems.length === 0 && <h1>is empty.</h1>}
          </div>

          <main className="cards">
            {newItems.map((e, i) => (
              <div className="card" key={i}>
                <section className="img-container">
                  <Image
                    src={e.image}
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
                  <p> $ {e.price} </p>
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
