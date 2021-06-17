import { InputHTMLAttributes } from 'react';
import { Container } from './style';

//InputHTMLAttributes e o tipo do meu elemento
type IInput = InputHTMLAttributes<HTMLInputElement>;

//dessa maneira meu input vai possuir todos atributos nativos do elemento input
const Input: React.FC<IInput> = ({ ...rest }) => <Container {...rest} />;
export default Input;
