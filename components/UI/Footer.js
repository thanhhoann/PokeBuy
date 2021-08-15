import Link from "next/link";

export default function Footer() {
  return (
    <>
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
          <h3>Pokémon. Buy. PokéBuy.</h3>
          <p>
            This is a project that I originally made for my CV and for my love
            with Pokémons. Although this is not entirely perfect ( lack of many
            other Pokémons and stats), this is just a demo.
          </p>
          <p>
            All data are available from{" "}
                              <a href="https://pokemontcg.io" style={{color: "gray"}}>
              the Pokémon TCG API
            </a>
          </p>
        </main>

        <main className="newsletter">
          <section className="title">
            <p>Newsletter</p>
          </section>
          <section className="form">
            <form>
              <input type="email" />
              <button>Subscribe</button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}
