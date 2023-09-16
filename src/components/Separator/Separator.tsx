import React from "react";
import * as Styled from "./Separator.styled";
import { motion } from "framer-motion";

export interface SeparatorProps {
  color?: string;
  fullWidth?: boolean;
  thickness?: string;
  animate?: boolean;
}

const Separator: React.FC<SeparatorProps> = ({
  color = "transparent",
  fullWidth = true,
  thickness = "1px",
  animate = false,
}) => {
  let animateProps = {};
  if (animate) {
    animateProps = {
      as: motion.hr,
      initial: { width: "0%" },
      animate: { width: "100%" },
      transition: { duration: 1 },
    };
  }
  return (
    <>
      <Styled.Seperator
        color={color}
        fullWidth={fullWidth}
        thickness={thickness}
        {...animateProps}
      />
    </>
  );
};

export default Separator;
