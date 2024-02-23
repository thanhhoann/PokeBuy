import React from "react";
import axios from "axios";

export async function getStaticProps() {
  const featured_cards = await axios
    .get(process.env.FIREBASE_DB_URL + "featured_cards.json")
    .then((res) => res.data.data);

  const hero_cards = await axios
    .get(process.env.FIREBASE_DB_URL + "hero_cards.json")
    .then((res) => res.data.data);

  return {
    props: {
      featured_cards,
      hero_cards,
    },
  };
}

export const shuffleCards = (cards) => {
  const shuffledArray = [...cards];

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
