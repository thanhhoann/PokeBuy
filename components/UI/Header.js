import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pokecoinSVG from "../../public/pokecoin.svg";

import { useMedia } from "use-media";
import { MenuButton } from "./MenuButton";
import Backdrop from "../UI/Backdrop";
import { useSelector } from "react-redux";
import AuthContext from "../../store/auth-context";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;

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

  const logoutHandler = () => {
    authContext.logout();
  };

  return (
    <>
      <div className="header-container">
        <main
          className="header-sub"
          style={{ width: mobileM ? (mobileS ? "100vw" : "107vw") : "" }}
        >
          <section>
            {authContext.name ? (
              <Link href="/account/profile">
                <a>
                  <h3>MY ACCOUNT</h3>
                </a>
              </Link>
            ) : (
              <Link href="/account/login">
                <a>
                  <h3>LOG IN</h3>
                </a>
              </Link>
            )}
          </section>

          <section>
            <h3>.</h3>
          </section>

          {!authContext.name ? (
            <Link href="/account/register">
              <a>
                <section>
                  <h3>CREATE ACCOUNT</h3>
                </section>
              </a>
            </Link>
          ) : (
            <section onClick={logoutHandler}>
              <h3 style={{ cursor: "pointer" }}>LOG OUT</h3>
            </section>
          )}
        </main>

        {isLoading && <Backdrop />}

        <main className="header-main">
          <Link href="/">
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
              <Link href="/explore">
                <a>
                  <section onClick={backDropHandler}>
                    <p>Explore</p>
                  </section>
                </a>
              </Link>

              <Link href="/contact">
                <a>
                  <section onClick={backDropHandler}>
                    <p>Contact</p>
                  </section>
                </a>
              </Link>

              <Link href="/cart">
                <a>
                  <section onClick={backDropHandler}>
                    <p>Cart ({cart} €)</p>
                  </section>
                </a>
              </Link>
            </div>
          )}
        </main>

        {/* Mobile size */}
        {showMenu && (
          <div className="modal">
            <Link href="/explore">
              <a>
                <section onClick={backDropHandler}>
                  <p>Explore</p>
                </section>
              </a>
            </Link>

            <Link href="/contact">
              <a>
                <section onClick={backDropHandler}>
                  <p>Contact</p>
                </section>
              </a>
            </Link>

            <Link href="/cart">
              <a>
                <section onClick={backDropHandler}>
                  <p>Cart ({cart} €)</p>
                </section>
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
