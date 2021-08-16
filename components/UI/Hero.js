import React from "react";
import Image from "next/image";
import pokemonImg from "../../public/98_hires.png";
import Tilt from "react-tilt";
import { useMedia } from "use-media";

import { motion } from "framer-motion";

export default function Hero() {
  const tablet = useMedia({ maxWidth: "768px" });
  const mobileM = useMedia({ maxWidth: "400px" });
  const mobileS = useMedia({ maxWidth: "320px" });

  const easing = [0.35, 0.82, 0.76, 0.25];

  return (
    <>
      <motion.div
        className="hero-container"
        initial={{ opacity: 0.1, x: -1000 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8 },
        }}
      >
        <motion.main
          className="left"
          style={{ fontSize: mobileM && (mobileS ? ".8rem" : "1rem") }}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: easing, delay: 1 },
          }}
        >
          <section>
            <h1>
              "Humans may have created me, but they will never enslave me. This
              cannot be my destiny."
            </h1>
          </section>

          <section>
            <p>- Mewtwo.</p>
          </section>
        </motion.main>

        {!tablet && (
          <motion.main
            className="right"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: 1,
              scaleX: 1,
              transition: { duration: 0.5, delay: 1 },
            }}
          >
            <Tilt
              className="tilt-container"
              options={{ max: 25, perspective: 900, scale: 1.1 }}
            >
              <motion.div
                className="tilt-inner"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, delay: 1.5 },
                }}
              >
                <Image src={pokemonImg} width={350} height={450} />
              </motion.div>
            </Tilt>
          </motion.main>
        )}
      </motion.div>
    </>
  );
}
