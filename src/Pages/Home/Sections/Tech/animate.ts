export const LeftSideVariants = {
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  initial: {
    x: "-100vw",
    opacity: 0,
  },
};

export const RightSideVariants = {
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      delay: 2,
    },
  },
  initial: {
    opacity: 0,
  },
};
