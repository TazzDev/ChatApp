import React from "react";
import * as Styled from "./Input.styled";
import { motion } from "framer-motion";

export interface InputProps {
  value: string;
  onChange: (newValue: string) => void;
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  fullWidth?: boolean;
  labelText?: string;
  inline?: boolean;
  background?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  fullWidth,
  type,
  labelText,
  inline = false,
  background = "#000"
}) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value.trim();
    onChange(newValue);
  };
  return (
    <Styled.InputContainer inline={inline} fullWidth={!!fullWidth}>
      {labelText && <Styled.Label>{labelText}</Styled.Label>}
      <Styled.Input
        as={motion.input}
        whileHover={{
          border: "0.4px solid #c4671b",
          transition: {duration: 0.2}
        }}
        whileFocus={{
          border: "0.4px solid #c4671b",
          transition: {duration: 0.2}
        }}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        type={type}
        background={background}
      />
    </Styled.InputContainer >
  );
};

export default Input;
