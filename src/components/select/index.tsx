import React from 'react';
import { Container } from './style';

interface InputSelection {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const Select: React.FC<InputSelection> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map((options, index) => (
          <option key={index} value={options.label}>
            {options.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
