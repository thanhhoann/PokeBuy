import React, { useEffect, useState } from "react";
import pokemon from "pokemontcgsdk";
import Image from "next/image";

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
      </div>
    </>
  );
}


/*         <main className="cards">
          {megaPokemons.data.slice(0, 30).map((e) => (
            <div key={e.id} className="card">
              <section className="img-container">
                <Image src={e.images.large} layout="fill" objectFit="fit" />
              </section>
              <section>
                <h3>{e.name}</h3>
                <p> $ {e.cardmarket.prices.trendPrice} </p>
              </section>
            </div>
          ))}
        </main> */
