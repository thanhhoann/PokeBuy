import React from "react";
import Image from "next/image";

import featuredCards from "../../pokemonsDB/featured.json";

export default function Featured() {
  return (
    <>
      <div className="featured-container">
        <div className="title">
          <p>Featured Cards</p>
        </div>

        <main className="cards">
          {featuredCards.data.slice(0, 12).map((e) => (
            <div key={e.id} className="card">
              <section className="img-container">
                <Image
                  src={e.images.large}
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
