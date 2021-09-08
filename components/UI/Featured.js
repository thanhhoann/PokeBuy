import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Backdrop from "../../components/UI/Backdrop";

export default function Featured(props) {
  const [isLoading, setIsLoading] = useState(false);

  const backDropHandler = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };


  return (
    <>
      <div className="featured-container">
        <div className="title">
          <p>Featured Cards</p>
        </div>

        {isLoading && <Backdrop />}

        <main className="cards">
          {props.cards.map((e) => (
            <Link key={e.id} href={`/explore/${e.id}`}>
              <div className="card" onClick={backDropHandler}>
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
            </Link>
          ))}
        </main>
      </div>
    </>
  );
}
