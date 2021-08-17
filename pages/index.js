import Head from "next/head";

import { motion } from "framer-motion";
import TextLoop from "react-text-loop";

import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 3000);
  }, []);

  const easing = [1, 1.16, 1, -0.39];

  const text = {
    initial: {
      clipPath: "circle(3.7% at 50% 50%)",
    },
    animate: {
      clipPath: "circle(70.7% at 50% 50%)",
      transition: { duration: 3, ease: easing },
    },
  };

  return (
    <>
      <motion.div className="loading-screen">
        <Head>
          <title>Home | PókeBuy.</title>
          <meta
            name="description"
            content="Get your favorite pókemon cards with ease."
          />
          <link rel="icon" href="./pokecoin.svg" />
        </Head>
        <motion.section
          className="title-container"
          variants={text}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <section>
            <h1>Póke</h1>
          </section>

          <TextLoop
            interval={1700}
            springConfig={{ stiffness: 180, damping: 8 }}
          >
            <h1>mons. Buy.</h1>
            <h1>Buy.</h1>
          </TextLoop>
        </motion.section>
      </motion.div>
    </>
  );
}
