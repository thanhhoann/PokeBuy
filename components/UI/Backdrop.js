import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

import Image from "next/image";
import pokecoin from "../../public/pokecoin.svg";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open="true">
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 1.5, repeat: Infinity },
          }}
        >
          <Image src={pokecoin} width={150} height={150} />
        </motion.div>
      </Backdrop>
    </div>
  );
}
