export const StackLeftVariants = {
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

export const StackRightVariants = {
  animate: {
    opacity: 1,

    transition: {
      duration: 1.2,
      delay: 2,
    },
  },
  initial: {
    opacity: 0,
  },
};
