import React, { useEffect, useState } from "react";
import Image from "next/image";

import Tilt from "react-tilt";
import ContentLoader from "react-content-loader";

import megaPokemons from "../../pokemonsDB/mega.json";

export default function Featured() {
  const [cards, setCards] = useState("");
  const [notFound, setNotFound] = useState(false);

  return (
    <>
      <div className="featured-container">
        <div className="title">
          <p>Featured Cards</p>
        </div>

        <main className="cards">
          {megaPokemons.data.slice(0, 40).map((e) => (
            <div key={e.id} className="card">
              <section className="img-container">
                <div className="tilt-inner">
                  {e ? (
                    <Image src={e.images.large} layout="fill" objectFit="fit" />
                  ) : (
                    <ContentLoader
                      viewBox="0 0 500 280"
                      height={300}
                      width={450}
                    >
                      <rect
                        x="3"
                        y="3"
                        rx="10"
                        ry="10"
                        width="300"
                        height="180"
                      />
                      <rect
                        x="6"
                        y="190"
                        rx="0"
                        ry="0"
                        width="292"
                        height="20"
                      />
                      <rect
                        x="4"
                        y="215"
                        rx="0"
                        ry="0"
                        width="239"
                        height="20"
                      />
                      <rect
                        x="4"
                        y="242"
                        rx="0"
                        ry="0"
                        width="274"
                        height="20"
                      />
                    </ContentLoader>
                  )}
                </div>
              </section>
              <section>
                <h3>{e.name}</h3>
                <p> $ {e.cardmarket.prices.trendPrice} </p>
              </section>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
