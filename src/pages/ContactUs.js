import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      // style={{ background: "#fff" }}
    >
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </motion.div>
  );
};

export default ContactUs;
