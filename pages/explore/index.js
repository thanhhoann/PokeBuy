import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useMedia } from "use-media";
import useSWR from "swr";
import axios from "axios";
import { getPlaiceholder } from "plaiceholder";
import Loader from "react-loader-spinner";

import Header from "../../components/UI/Header";
import Hero from "../../components/UI/Hero";
import Footer from "../../components/UI/Footer";
import Layout from "../../components/UI/Layout";
import Backdrop from "../../components/UI/Backdrop";
import Paginator from "../../components/UI/Pagination";

export async function getStaticProps(context) {
  const heroImagePaths = await axios
    .get(
      "https://pokebuy-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/hero.json"
    )
    .then((res) => res.data);

  const heroImages = await Promise.all(
    heroImagePaths.map(async (e) => {
      const { base64, img } = await getPlaiceholder(e);
      return {
        ...img,
        blurDataURL: base64,
      };
    })
  ).then((e) => e);

  return {
    props: {
      heroImages,
    },
  };
}

export default function Explore(props) {
  const mobileS = useMedia({ maxWidth: "320px" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const currentPageRes = useSWR(
    `https://api.pokemontcg.io/v2/cards?page=${currentPage}&pageSize=50`
  );
  const currentPageList = currentPageRes.data;

  // prefetching next page
  const nextPageRes = useSWR(
    `https://api.pokemontcg.io/v2/cards?page=${currentPage + 1}&pageSize=50`
  );

  const paginationHandler = (page) => {
    console.log(page);
  };

  const shimmer = (w, h) => `
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

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <>
      <Layout title="Explore">
        <Header />

        <div className="featured-container">
          <div className="title">
            <p>All Cards</p>
          </div>

          {isLoading && <Backdrop />}

          <main className="cards">
            {currentPageList ? (
              currentPageList.data.map((e, i) => {
                return (
                  <Link key={i} href={`/explore/${e.id}`}>
                    <div
                      className="card"
                      style={{
                        flex: mobileS && "0",
                        margin: mobileS && "auto",
                      }}
                    >
                      <section
                        className="img-container"
                        onClick={() => setIsLoading(!isLoading)}
                      >
                        <Image
                          src={e.images.small}
                          layout="fill"
                          objectFit="fit"
                          priority="true"
                          quality="100"
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(200, 200)
                          )}`}
                        />
                      </section>
                      <section>
                        <h3>{e.name}</h3>
                        <p> $ {e?.cardmarket?.prices?.trendPrice} </p>
                      </section>
                    </div>
                  </Link>
                );
              })
            ) : (
              <Loader
                style={{ margin: "10px" }}
                type="Puff"
                color="black"
                height={100}
                width={100}
                timeout={5000}
              />
            )}
          </main>

          <section>
            <Paginator page={(e) => setCurrentPage(e)} />
          </section>
        </div>

        <Footer />
      </Layout>
    </>
  );
}
