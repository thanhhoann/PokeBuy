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
    </>
  );
}
