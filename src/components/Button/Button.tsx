import React from "react";
import * as Styled from "./Button.styled";

export interface ButtonProps {
  children: string;
  icon?: any;
  bgColor?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  fullWidth = false,
  children,
  icon = undefined,
  bgColor = "orange",
}) => {
  return (
    <>
      <Styled.StyledButton background={bgColor} fullWidth={fullWidth}>{children}</Styled.StyledButton>
    </>
  );
};

export default Button;
