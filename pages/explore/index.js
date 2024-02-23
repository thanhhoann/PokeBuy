import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMedia } from "use-media";
import useSWR from "swr";
import Loader from "react-loader-spinner";

import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import Layout from "../../components/UI/Layout";
import Backdrop from "../../components/UI/Backdrop";
import Paginator from "../../components/UI/Pagination";
import { SimpleGrid, Box, Center } from "@chakra-ui/react";
import ListLayout from "@/components/UI/ListLayout";

export default function Explore() {
  const mobileS = useMedia({ maxWidth: "320px" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const currentPageRes = useSWR(
    `https://api.pokemontcg.io/v2/cards?page=${currentPage}&pageSize=50`,
  );
  const currentPageList = currentPageRes.data;

  // prefetching next page
  const nextPageRes = useSWR(
    `https://api.pokemontcg.io/v2/cards?page=${currentPage + 1}&pageSize=50`,
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

          <ListLayout>
            {currentPageList ? (
              currentPageList.data.map((card, i) => {
                return (
                  <Center width={"100%"} key={card.id}>
                    <Link key={i} href={`/explore/${card.id}`}>
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
                            src={card.images.small}
                            // layout="fill"
                            // objectFit="fit"
                            width={200}
                            height={300}
                            priority="true"
                            quality="100"
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                              shimmer(200, 200),
                            )}`}
                            alt="test"
                          />
                        </section>
                        <section>
                          <h3>{card.name}</h3>
                          <p> $ {card?.cardmarket?.prices?.trendPrice} </p>
                        </section>
                      </div>
                    </Link>
                  </Center>
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
          </ListLayout>

          <section>
            <Paginator page={(e) => setCurrentPage(e)} />
          </section>
        </div>

        <Footer />
      </Layout>
    </>
  );
}
