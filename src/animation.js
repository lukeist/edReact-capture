export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      // when: "beforeChildren",
      // staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
    },
  },
};

export const titleAni = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const photoAni = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};
