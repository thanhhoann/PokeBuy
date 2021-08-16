import React from "react";
import Image from "next/image";
import pokemonImg from "../../public/98_hires.png";
import Tilt from "react-tilt";
import { useMedia } from "use-media";

export default function Hero() {
  const tablet = useMedia({ maxWidth: "768px" });
  const mobileM = useMedia({ maxWidth: "400px" });
  const mobileS = useMedia({ maxWidth: "320px" });

  return (
    <>
      <div className="hero-container">
        <main className="left">
          <section>
            <h1>
              "Humans may have created me, but they will never enslave me. This
              cannot be my destiny."
            </h1>
          </section>

          <section>
            <p>- Mewtwo.</p>
          </section>
        </main>

        {!tablet && (
          <main className="right">
            <Tilt
              className="tilt-container"
              options={{ max: 25, perspective: 900, scale: 1.1 }}
            >
              <div className="tilt-inner">
                <Image src={pokemonImg} width={400} height={500} />
              </div>
            </Tilt>
          </main>
        )}
      </div>
    </>
  );
}
