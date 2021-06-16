import React from 'react';
import { Container } from './style';

interface InputSelection {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue: string | number;
}

const Select: React.FC<InputSelection> = ({
  options,
  onChange,
  defaultValue,
}) => (
  <Container>
    <select onChange={onChange} defaultValue={defaultValue}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </Container>
);

export default Select;
