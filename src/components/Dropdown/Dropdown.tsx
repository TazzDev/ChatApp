import React from "react";
import * as Styled from "./Dropdown.styled";

export interface DropdownOption {
  name: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  onChange: (value: string) => any;
  label?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label, onChange }) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.target.value;
    onChange(value);
  };
  return (
    <div>
      {label && <Styled.DropdownLabel>{label}</Styled.DropdownLabel>}
      <select onChange={onChangeHandler}>
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
