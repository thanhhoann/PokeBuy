import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Tilt from "react-tilt";
import ContentLoader from "react-content-loader";

export default function ExploreFeatured(props) {
  const [cards, setCards] = useState("");
  const [notFound, setNotFound] = useState(false);

  return (
    <>
      <div className="featured-container">
        <div className="title">
          <section>
            <p>{props.title} Cards</p>
          </section>

          <section>
            <Link href="/explore/legend">
              <a>
                <div className="btn">Products</div>
              </a>
            </Link>
          </section>
        </div>

        <main className="cards">
          {props.pokemonImg.map((e) => (
            <div key={e.id} className="card">
              <section className="img-container" style={{ margin: "10px" }}>
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
