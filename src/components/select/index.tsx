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
}) => {
  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
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
