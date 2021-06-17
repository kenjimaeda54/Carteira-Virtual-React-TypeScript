import React from 'react';
import { Container, ToggleLabel, ButtonToggle } from './style';

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

//isto e chamado de componente puro
const Toggle: React.FC<IToggleProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => (
  <Container>
    <ToggleLabel>{labelLeft} </ToggleLabel>
    <ButtonToggle
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <ToggleLabel>{labelRight} </ToggleLabel>
  </Container>
);
export default Toggle;
