import { ButtonHTMLAttributes } from 'react';
import { Container } from './style';

//ButtonHTMLAttributes e o tipo do meu elemento
type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

//dessa maneira meu input vai possuir todos atributos nativos do elemento input
const Button: React.FC<IButton> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Button;
