import React from "react";
import axios from "axios";
import useSWR from "swr";

// get data from Firebase realtime db
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

// get data from original Pokemon TCG API
export const getDataFromAPI = (pageNumber, pageSize) => {
  let data = useSWR(
    `https://api.pokemontcg.io/v2/cards?page=${pageNumber}&pageSize=${pageSize}`,
  ).data?.data;
  return data;
};

// randomize cards
export const shuffleCards = (cards, desiredLength) => {
  let shuffledArray = [...cards];
  if (desiredLength) shuffledArray = [...cards].slice(0, desiredLength);

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

// card image quality
export const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

// card loading
export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
