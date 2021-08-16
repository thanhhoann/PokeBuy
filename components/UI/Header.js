import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pokecoinSVG from "../../public/pokecoin.svg";

import { useMedia } from "use-media";
import { motion } from "framer-motion";
import { MenuButton } from "./MenuButton";

export default function Header() {
  const isSmall = useMedia({ maxWidth: "768px" });
  const mobileM = useMedia({ maxWidth: "400px" });
  const mobileS = useMedia({ maxWidth: "320px" });
  const [showMenu, setShowMenu] = useState(false);

  const isClickedHandler = (isClicked) => {
    if (isClicked) setShowMenu(true);
    else setShowMenu(false);
  };

  return (
    <>
      <div className="header-container">
        <main
          className="header-sub"
          style={{ width: mobileM ? (mobileS ? "110vw" : "107vw") : "" }}
        >
          <section>
            <Link href="/#">
              <a>
                <h3>LOG IN</h3>
              </a>
            </Link>
          </section>

          <section>
            <h3>.</h3>
          </section>

          <Link href="/#">
            <a>
              <section>
                <h3>CREATE ACCOUNT</h3>
              </section>
            </a>
          </Link>
        </main>

        <main className="header-main">
          <Link href="/#">
            <a>
              <div className="header-left">
                {!mobileM && (
                  <section className="img-container">
                    <Image src={pokecoinSVG} layout="fill" objectFit="fit" />
                  </section>
                )}

                <section className="title-container">
                  <h1 style={{ fontSize: mobileS && "1.8rem" }}>PókeBuy.</h1>
                </section>
              </div>
            </a>
          </Link>

          {isSmall ? (
            <MenuButton isClicked={isClickedHandler} />
          ) : (
            <div className="header-right">
              <Link href="/explore">
                <a>
                  <section>
                    <p>Explore</p>
                  </section>
                </a>
              </Link>

              <Link href="/#">
                <a>
                  <section>
                    <p>Contact</p>
                  </section>
                </a>
              </Link>

              <Link href="/#">
                <a>
                  <section>
                    <p>Cart</p>
                  </section>
                </a>
              </Link>
            </div>
          )}
        </main>

        {showMenu && (
          <div className="modal">
            <Link href="/explore">
              <a>
                <section>
                  <p>Explore</p>
                </section>
              </a>
            </Link>

            <Link href="/#">
              <a>
                <section>
                  <p>Contact</p>
                </section>
              </a>
            </Link>

            <Link href="/#">
              <a>
                <section>
                  <p>Cart</p>
                </section>
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
