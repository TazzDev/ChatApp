import React from "react";
import * as Styled from "./Button.styled";
import { motion } from "framer-motion";

export interface ButtonProps {
  children: string;
  icon?: any;
  bgColor?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  fullWidth = false,
  children,
  icon = undefined,
  bgColor = "orange",
  onClick
}) => {
  return (
    <>
      <Styled.StyledButton
        background={bgColor}
        fullWidth={fullWidth}
        as={motion.button}
        whileTap={{
          filter: "brightness(40%)",
          transition: { duration: 0.2 },
        }}
        onClick={onClick}
      >
        {children}
      </Styled.StyledButton>
    </>
  );
};

export default Button;
