import React, { useState, useEffect } from "react";
import Image from "next/image";
import Tilt from "react-tilt";

export default function Card({ image, w, h }) {
  return (
    <>
      <Tilt
        className="tilt-container"
        options={{ max: 25, perspective: 900, scale: 1.1 }}
      >
        <Image
          alt="Pokemon Card"
          src={image}
          priority="true"
          quality="100"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89OhSPQAIGwMHvnhFoQAAAABJRU5ErkJggg=="
          width={w}
          height={h}
        />
      </Tilt>
    </>
  );
}
