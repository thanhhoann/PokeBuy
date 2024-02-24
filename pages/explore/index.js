import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMedia } from "use-media";
import Loader from "react-loader-spinner";

import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import Layout from "@/components/UI/Layout";
import Backdrop from "@/components/UI/Backdrop";
import Paginator from "@/components/UI/Pagination";
import { Center } from "@chakra-ui/react";
import { ComplexListLayout } from "@/components/UI/ListLayout";
import { shimmer, toBase64, getDataFromAPI } from "@/utils/cards_helper";

export default function Explore() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  // TODO: add prefetching next page
  const currentPageData = getDataFromAPI(currentPageNumber, 30);

  // columns and rows for each sreen-widths
  const cols = {
    tablet: 3,
    laptop: 4,
    laptop_L: 5,
    "4k": 9,
  };

  return (
    <>
      <Layout title="Explore">
        <Header />

        <div className="featured-container">
          <div className="title">
            <p>All Cards</p>
          </div>

          {isLoading && <Backdrop />}

          <ComplexListLayout cols={cols}>
            {currentPageData ? (
              currentPageData.map((card, i) => {
                return (
                  <Center width={"100%"} key={card.id}>
                    <Link key={i} href={`/explore/${card.id}`}>
                      <div>
                        <section
                          className="img-container"
                          onClick={() => setIsLoading(!isLoading)}
                        >
                          <Image
                            src={card.images.small}
                            width={200}
                            height={300}
                            priority="true"
                            quality="100"
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                              shimmer(200, 200),
                            )}`}
                            alt="Pokemon Card"
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
          </ComplexListLayout>

          <section>
            <Paginator page={(e) => setCurrentPageNumber(e)} />
          </section>
        </div>

        <Footer />
      </Layout>
    </>
  );
}
