import React from 'react';
import { Container } from './style';

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const Select: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map((option) => (
          <option value={option.value}>{option.label} </option>
        ))}
      </select>
    </Container>
  );
};
export default Select;
