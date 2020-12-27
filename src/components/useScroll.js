import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
    // console.log(controls);
  } else {
    controls.start("hidden");
    // console.log(controls);
  }
  return [element, controls];
};
