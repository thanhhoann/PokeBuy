import React from "react";
import Image from "next/image";

import Tilt from "react-tilt";
import { useMedia } from "use-media";
import { motion } from "framer-motion";

export default function Hero(props) {
  const tablet = useMedia({ maxWidth: "768px" });
  const mobileM = useMedia({ maxWidth: "400px" });
  const mobileS = useMedia({ maxWidth: "320px" });

  const easing = [0.35, 0.82, 0.76, 0.25];

  // shuffle things up
  let arrImg = props.cards;
  const img = arrImg[Math.floor(Math.random() * arrImg.length)];

  return (
    <>
      <motion.div className="hero-container">
        <motion.main
          className="left"
          style={{ fontSize: mobileM && (mobileS ? ".8rem" : "1rem") }}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: easing, delay: 0.7 },
          }}
        >
          <section>
            <h1>
              "Some trainers have no fear. To them, this is just one more
              challenge.",
            </h1>
          </section>

          <section>
            <p>- Ash Ketchum.</p>
          </section>
        </motion.main>

        {!tablet && (
          <motion.main
            className="right"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: 1,
              scaleX: 1,
              transition: { duration: 0.5, delay: 0.5 },
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
                  transition: { duration: 0.5, delay: 1 },
                }}
              >
                <Image
                  alt=""
                  src={img}
                  priority="true"
                  quality="100"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89OhSPQAIGwMHvnhFoQAAAABJRU5ErkJggg=="
                  width={350}
                  height={450}
                />
              </motion.div>
            </Tilt>
          </motion.main>
        )}
      </motion.div>
    </>
  );
}
