import React from "react";
import Image from "next/image";

import pokemonImg from "../../public/98_hires.png";
import pic_1 from "../../public/1.png";
import pic_2 from "../../public/2.png";
import pic_3 from "../../public/3.png";
import pic_4 from "../../public/4.png.png";
import pic_5 from "../../public/5.png";
import pic_6 from "../../public/6.png.png";
import pic_7 from "../../public/7.png";
import pic_8 from "../../public/8.png.png";
import pic_9 from "../../public/9.png.png";

import Tilt from "react-tilt";
import { useMedia } from "use-media";
import { motion } from "framer-motion";

export default function Hero() {
  const tablet = useMedia({ maxWidth: "768px" });
  const mobileM = useMedia({ maxWidth: "400px" });
  const mobileS = useMedia({ maxWidth: "320px" });

  const easing = [0.35, 0.82, 0.76, 0.25];

  // random pick image
  let arrImg = [
    pokemonImg,
    pic_9,
    pic_8,
    pic_7,
    pic_6,
    pic_5,
    pic_4,
    pic_3,
    pic_2,
    pic_1,
  ];

  let arrQuote = [
    "Don’t you know that love is the most important thing in the whole world?",
    "There’s no sense in going out of your way to get somebody to like you.",
    "Team Rocket blasting off at the speed of light!",
    "Some trainers have no fear. To them, this is just one more challenge.",
  ];

  let arrAuthor = [
    "Ash Ketchum",
    "Misty Williams",
    "Mewtwo",
    "N Pokemon Black/White",
    "Brock Harrison",
  ];

  const img = arrImg[Math.floor(Math.random() * arrImg.length)];
  const quote = arrQuote[Math.floor(Math.random() * arrQuote.length)];
  const author = arrAuthor[Math.floor(Math.random() * arrAuthor.length)];

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
            <h1>{quote}</h1>
          </section>

          <section>
            <p>- {author}.</p>
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
                <Image src={img} width={350} height={450} />
              </motion.div>
            </Tilt>
          </motion.main>
        )}
      </motion.div>
    </>
  );
}
