import React from 'react';
import { Container, ToggleLabel, ButtonToggle } from './style';

//isto e chamado de componente puro
const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light </ToggleLabel>
    <ButtonToggle
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log('cheguei')}
    />
    <ToggleLabel>Dark </ToggleLabel>
  </Container>
);
export default Toggle;
