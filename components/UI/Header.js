import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMedia } from "use-media";
import pokecoinSVG from "../../public/pokecoin.svg";
import { MenuButton } from "./MenuButton";
import Backdrop from "../UI/Backdrop";
import AuthContext from "../../store/auth-context";
import { useSelector } from "react-redux";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const authContext = useContext(AuthContext);

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

  const isLoggedIn = authContext.isLoggedIn;
  const logoutHandler = () => {
    authContext.logout();
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="header-container">
          <main
            className="header-sub"
            style={{ width: mobileM ? (mobileS ? "100vw" : "107vw") : "" }}
          >
            <section>
              {authContext.name ? (
                <Link href="/account/profile">
                  <h3>MY ACCOUNT</h3>
                </Link>
              ) : (
                <Link href="/account/login">
                  <h3>LOG IN</h3>
                </Link>
              )}
            </section>

            <section>
              <h3>.</h3>
            </section>

            {!authContext.name ? (
              <Link href="/account/register">
                <section>
                  <h3>CREATE ACCOUNT</h3>
                </section>
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
              <div className="header-left" onClick={backDropHandler}>
                {!mobileM && (
                  <section className="img-container">
                    <Image
                      src={pokecoinSVG}
                      fill
                      // objectFit="fit"
                      alt="pokecoin SVG"
                    />
                  </section>
                )}

                <section className="title-container">
                  <h1 style={{ fontSize: mobileS && "1.8rem" }}>PókeBuy.</h1>
                </section>
              </div>
            </Link>

            {isSmall ? (
              <MenuButton isClicked={isClickedHandler} />
            ) : (
              <div className="header-right">
                <Link href="/explore">
                  <section onClick={backDropHandler}>
                    <p>Explore</p>
                  </section>
                </Link>

                <Link href="/contact">
                  <section onClick={backDropHandler}>
                    <p>Contact</p>
                  </section>
                </Link>

                <Link href="/cart">
                  <section onClick={backDropHandler}>
                    <p>Cart ({cart} €)</p>
                  </section>
                </Link>
              </div>
            )}
          </main>

          {/* Mobile size */}
          {showMenu && (
            <div className="modal">
              <Link href="/explore">
                <section onClick={backDropHandler}>
                  <p>Explore</p>
                </section>
              </Link>

              <Link href="/contact">
                <section onClick={backDropHandler}>
                  <p>Contact</p>
                </section>
              </Link>

              <Link href="/cart">
                <section onClick={backDropHandler}>
                  <p>Cart ({cart} €)</p>
                </section>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}
