import React, { useEffect, useState } from "react";
import pokemon from "pokemontcgsdk";
import Image from "next/image";

import Tilt from "react-tilt";

import legendPokemons from "../../pokemonsDB/legend.json";
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
                <Tilt
                  options={{ max: 25, perspective: 900, scale: 1.1 }}
                  className="img-container"
                >
                  <div className="tilt-inner">
                    <Image src={e.images.large} layout="fill" objectFit="fit" />
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
    </>
  );
}
