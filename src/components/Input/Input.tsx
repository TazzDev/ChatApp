import React, {useState} from "react";
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
  onEnter?: any;
  disabled?:boolean
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  fullWidth,
  type,
  labelText,
  inline = false,
  background = "#000",
  onEnter = ()=>{},
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState("")
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };
  return (
    <Styled.InputContainer inline={inline} fullWidth={!!fullWidth}>
      {labelText && <Styled.Label>{labelText}</Styled.Label>}
      <Styled.Input
      disabled={disabled}
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
        onKeyDown={(e)=>{
          if (e.key === "Enter" ) {
            onEnter(inputValue)
          }
        }}
        placeholder={placeholder}
        type={type}
        background={background}
      />
    </Styled.InputContainer >
  );
};

export default Input;
