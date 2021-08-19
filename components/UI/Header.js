import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pokecoinSVG from "../../public/pokecoin.svg";

import { useMedia } from "use-media";
import { MenuButton } from "./MenuButton";
import Backdrop from "../UI/Backdrop";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const isSmall = useMedia({ maxWidth: "768px" });
  const mobileM = useMedia({ maxWidth: "400px" });
  const mobileS = useMedia({ maxWidth: "320px" });

  const isClickedHandler = (isClicked) => {
    if (isClicked) setShowMenu(true);
    else setShowMenu(false);
  };

  const backDropHandler = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      <div className="header-container">
        <main
          className="header-sub"
          style={{ width: mobileM ? (mobileS ? "100vw" : "107vw") : "" }}
        >
          <section>
            <Link href="/account/login">
              <a>
                <h3>LOG IN</h3>
              </a>
            </Link>
          </section>

          <section>
            <h3>.</h3>
          </section>

          <Link href="/account/register">
            <a>
              <section>
                <h3>CREATE ACCOUNT</h3>
              </section>
            </a>
          </Link>
        </main>

        {isLoading && <Backdrop />}

        <main className="header-main">
          <Link href="/home">
            <a>
              <div className="header-left" onClick={backDropHandler}>
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
              <Link href="/home/explore">
                <a>
                  <section onClick={backDropHandler}>
                    <p>Explore</p>
                  </section>
                </a>
              </Link>

              <Link href="/home/contact">
                <a>
                  <section onClick={backDropHandler}>
                    <p>Contact</p>
                  </section>
                </a>
              </Link>

              <Link href="/home/cart">
                <a>
                  <section onClick={backDropHandler}>
                    <p>Cart</p>
                  </section>
                </a>
              </Link>
            </div>
          )}
        </main>

        {showMenu && (
          <div className="modal">
            <Link href="/home/explore">
              <a>
                <section onClick={backDropHandler}>
                  <p>Explore</p>
                </section>
              </a>
            </Link>

            <Link href="/home/contact">
              <a>
                <section onClick={backDropHandler}>
                  <p>Contact</p>
                </section>
              </a>
            </Link>

            <Link href="/home/cart">
              <a>
                <section onClick={backDropHandler}>
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
