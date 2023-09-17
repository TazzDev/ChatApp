import React from "react";
import { motion } from "framer-motion";
import * as Styled from "./Loader.styled";
import { Background } from "../../pages/Login/Login.styled";

export interface LoaderProps {
  dotsColor?: string;
}

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: "easeInOut",
};

const Loader: React.FC<LoaderProps> = ({ dotsColor="orange" }) => {
  return (
    <Background>
    <Styled.LoaderContainer
      as={motion.div}
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
    >
      <Styled.Dot
        as={motion.span}
        variants={DotVariants}
        transition={DotTransition}
        backgroundColor={dotsColor}
      />
      <Styled.Dot
        as={motion.span}
        variants={DotVariants}
        transition={DotTransition}
        backgroundColor={dotsColor}
      />
      <Styled.Dot
        as={motion.span}
        variants={DotVariants}
        transition={DotTransition}
        backgroundColor={dotsColor}
      />
    </Styled.LoaderContainer>
    </Background>
  );
};

export default Loader;
