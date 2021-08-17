import Link from "next/link";
import { useMedia } from "use-media";

export default function Footer() {
  const tablet = useMedia({ maxWidth: "768px" });

  return (
    <>
      {tablet ? (
        <div className="tablet-footer-container">
          <main className="customer-care">
            <section className="title">
              <p>Customer care</p>
            </section>

            <Link href="/#">
              <a>
                <p>Contact us</p>
              </a>
            </Link>
          </main>

          <main className="about">
            <section className="title">
              <p>About</p>
            </section>
            <h3>Pokémon. Buy. PokéBuy.</h3>
            <p>
              This is a project that I originally made for my CV and for my love
              with Pokémons. Although this is not entirely perfect (lack of many
              other Pokémons and stats), this is just a demo.
            </p>
            <p>
              All data are available from{" "}
              <a href="https://pokemontcg.io" style={{ color: "gray" }}>
                the Pokémon TCG API
              </a>
            </p>
          </main>

          <main className="newsletter">
            <section className="title">
              <p>Newsletter</p>
            </section>

            <p>Join our mailing list</p>
            <section className="form">
              <form>
                <input type="email" placeholder="your@email.com" />
              </form>
              <div className="button">Subscribe</div>
            </section>
          </main>
        </div>
      ) : (
        <div className="footer-container">
          <main className="customer-care">
            <section className="title">
              <p>Customer care</p>
            </section>

            <Link href="/#">
              <a>
                <p>Contact us</p>
              </a>
            </Link>
          </main>

          <main className="about">
            <section className="title">
              <p>About</p>
            </section>
            <h3>Pokémons. Buy. PokéBuy.</h3>
            <p>
              This is a project that I originally made for my CV and for my love
              with Pokémons. Although this is not entirely perfect (lack of many
              other Pokémons and stats), this is just a demo.
            </p>
            <p>
              All data are available from{" "}
              <a href="https://pokemontcg.io" style={{ color: "gray" }}>
                the Pokémon TCG API
              </a>
            </p>
          </main>

          <main className="newsletter">
            <section className="title">
              <p>Newsletter</p>
            </section>

            <p>Join our mailing list</p>
            <section className="form">
              <form>
                <input type="email" placeholder="your@email.com" />
              </form>
              <div className="button">Subscribe</div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
