import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Backdrop from "../../components/UI/Backdrop";
import { SimpleGrid } from "@chakra-ui/react";
import { SimpleListLayout } from "./ListLayout";
import { shuffleCards } from "@/utils/cards_helper";
import Card from "./Card";

export default function Featured(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);

  const backDropHandler = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  useEffect(() => {
    if (props.cards) setShuffledCards(shuffleCards(props.cards, 9));
  }, []);

  return (
    <>
      <div className="featured-container">
        <div className="title">
          <p>Featured Cards</p>
        </div>

        {isLoading && <Backdrop />}

        <SimpleListLayout>
          {props.cards &&
            shuffledCards &&
            shuffledCards.map((card) => (
              <Link key={card.id} href={`/explore/${card.id}`}>
                <div className="card" onClick={backDropHandler}>
                  <section className="img-container">
                    <Card image={card.images.small} w={300} h={300} />
                  </section>
                  <section>
                    {" "}
                    <h3>{card.name}</h3>
                    <p> $ {card.cardmarket.prices.trendPrice} </p>
                  </section>
                </div>
              </Link>
            ))}
        </SimpleListLayout>
      </div>
    </>
  );
}
