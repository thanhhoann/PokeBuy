import React, { useEffect, useState } from "react";
import pokemon from "pokemontcgsdk";
import Image from "next/image";

export default function Featured() {
  const [cards, setCards] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(async () => {
    const results = await pokemon.card
      .all({ q: "subtypes:mega" })
      .then((result) => result);

    if (results) {
      setCards(results);
      setNotFound(!notFound);
    } else {
      setNotFound(true);
    }
  }, []);

  console.log(cards);

  return (
    <>
      <div className="featured-container">
        <div className="title">
          <p>Featured Cards</p>
        </div>
        <main className="cards">
          {cards &&
            cards.map((e) => (
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
        </main>
      </div>
    </>
  );
}
