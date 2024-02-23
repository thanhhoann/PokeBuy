import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Backdrop from "../../components/UI/Backdrop";
import { SimpleGrid } from "@chakra-ui/react";
import ListLayout from "./ListLayout";

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

        <ListLayout>
          {props.cards &&
            props.cards.map((e) => (
              <Link key={e.id} href={`/explore/${e.id}`}>
                <div className="card" onClick={backDropHandler}>
                  <section className="img-container">
                    <Image
                      src={e.images.small}
                      // fill
                      // sizes="(max-width: 768px) 1vw, (max-width: 1200px) 1vw, 1vw"
                      width={300}
                      height={300}
                      priority="true"
                      quality="100"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89OhSPQAIGwMHvnhFoQAAAABJRU5ErkJggg=="
                      alt="featured cards"
                    />
                  </section>
                  <section>
                    {" "}
                    <h3>{e.name}</h3>
                    <p> $ {e.cardmarket.prices.trendPrice} </p>
                  </section>
                </div>
              </Link>
            ))}
        </ListLayout>
      </div>
    </>
  );
}
